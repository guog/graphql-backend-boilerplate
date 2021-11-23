import {
  ApolloServerPluginCacheControlDisabled,
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginInlineTrace,
  ApolloServerPluginInlineTraceDisabled,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginUsageReportingDisabled,
  AuthenticationError
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import type { Application } from 'express'
import type { GraphQLError } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError
} from 'jsonwebtoken'
import { createContext } from './context'
import createApplication from './craeteApplication'
import {
  APP_PATH,
  APP_PORT,
  APP_SHIELD_DISABLED,
  IsProductionMode,
  NODE_ENV
} from './environment'
import permission from './permission'
import schema from './schema'

export const schemaWithMiddleware = applyMiddleware(
  schema,
  APP_SHIELD_DISABLED ? undefined : permission
)

function createApolloServer(httpServer: http.Server) {
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
      IsProductionMode
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageLocalDefault()
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
