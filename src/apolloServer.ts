import {
  ApolloServerPluginCacheControlDisabled,
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginInlineTrace,
  ApolloServerPluginInlineTraceDisabled,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginUsageReportingDisabled
} from 'apollo-server-core'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { Application } from 'express'
import { GraphQLError } from 'graphql'
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError
} from 'jsonwebtoken'
import http from 'http'
import { createContext } from './context'
import { APP_PATH, APP_SHIELD_DISABLED, IsProductionMode } from './environment'
import schema from './schema'
import permission from './permission'
import { applyMiddleware } from 'graphql-middleware'

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
    formatError: (err: GraphQLError) => {
      console.error(err)
      if (err instanceof TokenExpiredError) {
        return new AuthenticationError('Token Expired')
      } else if (err instanceof JsonWebTokenError) {
        return new AuthenticationError('Token Invalid')
      } else if (err instanceof NotBeforeError) {
        return new AuthenticationError('Token Not Actived')
      }

      return err
    },
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
