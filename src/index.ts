import type { Application } from 'express'
import http from 'http'
import { createApolloServer, initializeApolloServer } from './apolloServer'
import createApplication from './craeteApplication'
import { APP_PORT, NODE_ENV } from './environment'

export const startServer = async (
  app: Application,
  port: number | string
): Promise<http.Server> => {
  const httpServer = http.createServer(app)
  const apollo = createApolloServer(httpServer)

  await apollo.start()

  const handleApolloServerInit = initializeApolloServer(
    httpServer,
    apollo,
    app,
    port as number
  )

  return httpServer.listen({ port, host: '0.0.0.0' }, () => {
    handleApolloServerInit()
  })
}

if (NODE_ENV !== 'test') {
  console.info(process.env)
  const app = createApplication()

  startServer(app, APP_PORT)
}
