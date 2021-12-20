import type { ApolloClient } from 'apollo-client'
import type { GraphQLClient } from 'graphql-request'
import type { PrismaClient } from '@prisma/client'
import type { Server } from 'http'
import type { SubscriptionClient } from 'subscriptions-transport-ws'
import { assert } from '../src/utils/assert'

export class TestUtils {
  public apolloClient: ApolloClient<any>
  public server: Server
  public prisma: PrismaClient
  public graphqlClient: GraphQLClient
  public networkInterface: SubscriptionClient

  constructor(
    apolloClient: ApolloClient<any>,
    server: Server,
    prisma: PrismaClient,
    graphqlClient: GraphQLClient,
    networkInterfafce: SubscriptionClient
  ) {
    this.apolloClient = apolloClient
    this.server = server
    this.prisma = prisma
    this.graphqlClient = graphqlClient
    this.networkInterface = networkInterfafce
  }

  setAuthToken = (token: string): void => {
    this.graphqlClient.setHeader('Authorization', `${token}`)
  }
}

let _testUtils: TestUtils | undefined

export function getTestUtils(): TestUtils {
  assert(_testUtils, 'Test utilities are not initialized.')

  return _testUtils
}

export function setTestUtils(value: TestUtils): void {
  _testUtils = value
}
