import {
  ApolloServerPluginCacheControlDisabled,
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginInlineTrace,
  ApolloServerPluginInlineTraceDisabled,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginUsageReportingDisabled
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import { createContext, type Context } from './context'
import { APP_PATH, APP_SHIELD_DISABLED, IsProductionMode } from './environment'
import permission from './permission'
import { ApolloServerPluginLogger } from './plugins'
import schema from './schema'
import logger from './winstonLogger'

const schemaWithMiddleware = APP_SHIELD_DISABLED
  ? applyMiddleware(schema)
  : applyMiddleware(schema, permission)

export function createApolloServer(httpServer: http.Server) {
  return new ApolloServer({
    schema: schemaWithMiddleware,
    context: createContext,
    introspection: !IsProductionMode,
    debug: !IsProductionMode,
    persistedQueries: false,
    logger,
    plugins: [
      ApolloServerPluginDrainHttpServer({
        httpServer,
        stopGracePeriodMillis: 10000
      }),
      ApolloServerPluginUsageReportingDisabled(),
      ApolloServerPluginCacheControlDisabled(),
      IsProductionMode
        ? ApolloServerPluginInlineTraceDisabled()
        : ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageDisabled(),
      ApolloServerPluginLogger<Context>({ logger })
      /* IsProductionMode
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageLocalDefault() */
    ]
  })
}

export function initializeApolloServer(
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
