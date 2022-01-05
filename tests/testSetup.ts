import { PrismaClient } from '@prisma/client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { execSync } from 'child_process'
import { Headers } from 'cross-fetch'
import type express from 'express'
import { GraphQLClient } from 'graphql-request'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import NodeWebSocket from 'ws'
import { startServer } from '../src'
import createApp from '../src/craeteApplication'
import { assert } from '../src/utils/assert'
import { getTestUtils, setTestUtils, TestUtils } from './testUtils'

// @ts-ignore
global.Headers = global.Headers || Headers

const { APP_PORT = 5566, DATABASE_URL, APP_PATH } = process.env
export const testSubscriptionHost = `ws://localhost:${APP_PORT}${APP_PATH}`
export const testHost = `http://localhost:${APP_PORT}${APP_PATH}`

assert(DATABASE_URL, 'Missing DATABASE_URL test environment varialbe.')
assert(APP_PATH, 'Missing APP_PATH test environment varialbe.')

beforeAll(async () => {
  const prisma = new PrismaClient()
  await prisma.$executeRawUnsafe('DROP SCHEMA IF EXISTS test CASCADE')
  await prisma.$executeRawUnsafe('CREATE SCHEMA test')

  execSync('npx prisma db push --accept-data-loss', {
    env: {
      ...process.env,
      DATABASE_URL
    }
  })
  execSync('npx prisma db seed', {
    env: {
      ...process.env,
      DATABASE_URL
    }
  })

  // Start server.
  const app: express.Application = createApp()
  const server = await startServer(app, APP_PORT)

  // Instantiate graphql client.
  const graphqlClient = new GraphQLClient(testHost)

  const networkInterface = new SubscriptionClient(
    testSubscriptionHost,
    { reconnect: true },
    NodeWebSocket
  )

  const apolloClient = new ApolloClient({
    link: new WebSocketLink(networkInterface),
    cache: new InMemoryCache()
  })

  setTestUtils(
    new TestUtils(apolloClient, server, prisma, graphqlClient, networkInterface)
  )
})

afterAll(async () => {
  const { server, prisma, networkInterface } = getTestUtils()

  // Close server.
  await new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        reject(err)
      } else {
        resolve(undefined)
      }
    })

    networkInterface.close()
  })

  // Disconnect prisma client.
  await prisma.$disconnect()
})
