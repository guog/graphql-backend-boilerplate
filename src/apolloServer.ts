import {
  ApolloServerPluginCacheControlDisabled,
  ApolloServerPluginInlineTraceDisabled,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginUsageReportingDisabled
} from '@apollo/server/plugin/disabled'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace'
import { ApolloServer } from '@apollo/server'
import express, { Application } from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import cors from 'cors'
import { createContext, type Context } from './context'
import { APP_PATH, APP_SHIELD_DISABLED, IsProductionMode } from './environment'
import permission from './permission'
import { ApolloServerPluginLogger } from './plugins'
import schema from './schema'
import logger from './winstonLogger'
import { json } from 'body-parser'
import { altairExpress } from 'altair-express-middleware'
import { OpenAPI, useSofa } from 'sofa-api'
import { outputJSON } from 'fs-extra'
import { absolutePath } from 'swagger-ui-dist'
import path from 'path'

const schemaWithMiddleware = APP_SHIELD_DISABLED
  ? applyMiddleware(schema)
  : applyMiddleware(schema, permission)

export function createApolloServer(httpServer: http.Server) {
  return new ApolloServer<Context>({
    schema: schemaWithMiddleware,
    introspection: !IsProductionMode,
    persistedQueries: false,
    includeStacktraceInErrorResponses: !IsProductionMode,
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
      ApolloServerPluginLogger<Context>({ logger }),
      ApolloServerPluginLandingPageDisabled()
      /* IsProductionMode
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageLocalDefault() */
    ]
  })
}

export function initializeApolloServer(
  httpServer: http.Server,
  apollo: ApolloServer<Context>,
  app: Application,
  port: number
) {
  /* app.use(
    `${APP_PATH}`,
    cors<cors.CorsRequest>,
    json(),
    altairExpress({

      initialSettings: {
        language: 'zh-CN'
      },
      endpointURL: `${APP_PATH}`,
      //subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
      //initialQuery
    })
  ) */
  app.use(
    APP_PATH,
    cors<cors.CorsRequest>(),
    json(),
    altairExpress({
      initialSettings: {
        language: 'zh-CN'
      },
      endpointURL: `${APP_PATH}`
      //subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
      //initialQuery
    }),
    expressMiddleware(apollo, {
      context: createContext
    })
  )
  const openApi = OpenAPI({
    schema: schemaWithMiddleware,
    info: {
      title: 'Example API',
      version: '3.0.0'
    }
  })

  app.use(
    '/api',
    useSofa({
      basePath: '/api',
      schema: schema,
      context: createContext,
      errorHandler(errs) {
        console.error(errs)
        return new Response(errs[0], {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        })
      },
      onRoute(info) {
        openApi.addRoute(info, {
          basePath: '/api'
        })
      }
    })
  )
  app.use('/', express.static('public'))
  outputJSON(path.join('public', 'swagger.json'), openApi.get(), {
    EOL: '',
    spaces: 2
  })
  /* apollo.applyMiddleware({
    app,
    path: APP_PATH,
    cors: true,
    disableHealthCheck: true
  }) */

  /* runSubscriptionServer(httpServer, apollo) */

  return (): void => {
    process.stdout.write(
      `🚀 Server ready at http://localhost:${port}${APP_PATH}\n`
    )
  }
}
