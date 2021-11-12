import {
  ApolloServerPluginCacheControlDisabled,
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginInlineTrace,
  ApolloServerPluginInlineTraceDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginUsageReportingDisabled
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import type { Application } from 'express'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import createApplication from './craeteApplication'
import { createContext } from './context'
import { APP_PATH, APP_PORT, IsProductionMode, NODE_ENV } from './environment'
import schema from './schema'

export const schemaWithMiddleware = applyMiddleware(schema /* , permissions */)

function createApolloServer(httpServer: http.Server) {
  return new ApolloServer({
    schema: schemaWithMiddleware,
    context: createContext,
    introspection: !IsProductionMode,
    debug: !IsProductionMode,
    persistedQueries: false,
    plugins: [
      ApolloServerPluginDrainHttpServer({
        httpServer,
        stopGracePeriodMillis: 10000
      }),
      ApolloServerPluginUsageReportingDisabled(),
      ApolloServerPluginInlineTraceDisabled(),
      ApolloServerPluginCacheControlDisabled(),
      ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ApolloServerPluginInlineTrace()
    ]
  })
}

function initializeApolloServer(
  httpServer: http.Server,
  apollo: ApolloServer,
  app: Application,
  port: number
) {
  apollo.applyMiddleware({
    app,
    path: APP_PATH,
    cors: true,
    disableHealthCheck: true
  })

  /* runSubscriptionServer(httpServer, apollo) */

  return (): void => {
    process.stdout.write(
      `🚀 Server ready at http://localhost:${port}${apollo.graphqlPath}\n`
    )
  }
}

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
  const app = createApplication()

  startServer(app, APP_PORT)
}
