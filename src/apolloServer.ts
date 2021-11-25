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
import { createContext } from './context'
import { APP_PATH, APP_SHIELD_DISABLED, IsProductionMode } from './environment'
import permission from './permission'
import schema from './schema'

const schemaWithMiddleware = applyMiddleware(
  schema,
  APP_SHIELD_DISABLED ? undefined : permission
)

export function createApolloServer(httpServer: http.Server) {
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
      ApolloServerPluginCacheControlDisabled(),
      IsProductionMode
        ? ApolloServerPluginInlineTraceDisabled()
        : ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageDisabled()
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
