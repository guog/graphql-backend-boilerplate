import type {
  ApolloServerPlugin,
  BaseContext,
  GraphQLRequestListener,
  GraphQLServerListener
} from 'apollo-server-plugin-base'
import { nanoid } from 'nanoid'
import winston, { type Logger } from 'winston'

interface Options {
  logger?: Logger
}

// https://www.apollographql.com/docs/apollo-server/integrations/plugins-event-reference

export function ApolloServerPluginLogger<
  TContext extends BaseContext = BaseContext
>(options: Options = {}): ApolloServerPlugin<TContext> {
  const logger =
    options?.logger ||
    winston.createLogger({
      transports: [new winston.transports.Console()],
      level: 'debug'
    })

  return {
    /**
     * Apollo Server is preparing to start serving GraphQL requests
     */
    async serverWillStart(_service) {
      const ID = nanoid()
      const childLogger = logger.child({ ID, lifecycle: 'Server' })
      childLogger.debug(`Apollo Server is starting`, {
        event: 'serverWillStart'
      })
      const handler: GraphQLServerListener = {
        /**
         * The schemaDidLoadOrUpdate event fires whenever Apollo Server initially
         *  loads the schema or updates the schema. A schemaDidLoadOrUpdate handler
         *  is given the new API schema and optionally the new core schema
         * (if using a gateway). If you provide a gateway and it is older than
         *  @apollo/gateway@0.35.0, attempting to register a schemaDidLoadOrUpdate
         *  handler will fail.
         */
        schemaDidLoadOrUpdate(_schemaContext) {
          childLogger.debug(
            `Apollo Server initially loads or updates the schema`,
            {
              event: 'schemaDidLoadOrUpdate'
            }
          )
        },
        /**
         * The drainServer event fires when Apollo Server is starting to shut
         *  down because ApolloServer.stop() has been invoked (either
         *  explicitly by your code, or by one of the termination signal
         *  handlers).
         *
         * While drainServer handlers run, GraphQL operations can still execute
         *  successfully. This hook is designed to allow you to stop accepting
         *  new connections and close existing connections.
         *
         * Apollo Server has a built-in plugin which uses this event to drain
         *  a Node http.Server.
         */
        async drainServer() {
          childLogger.debug(`Apollo Server is starting to shut down`, {
            event: 'drainServer'
          })
        },
        async serverWillStop() {
          childLogger.debug(`Apollo Server is will stop`, {
            event: 'serverWillStop'
          })
        }
      }
      return handler
    },
    /**
     * pollo Server begins fulfilling a GraphQL request
     * @returns
     */
    async requestDidStart(requestContext) {
      const ID = nanoid()
      const childLogger = logger.child({ ID, lifecycle: 'Request' })
      const { query, operationName, variables } = requestContext.request
      childLogger.debug(`fulfilling request`, {
        event: 'requestDidStart',
        operationName,
        query: query?.replace(/\s+/g, ' '),
        variables
      })
      const handler: GraphQLRequestListener<TContext> = {
        /**
         * The didResolveSource event is invoked after Apollo Server has determined the
         *  String-representation of the incoming operation that it will act upon.
         * In the event that this String was not directly passed in from the client,
         * this may be retrieved from a cache store (e.g., Automated Persisted Queries).
         */
        async didResolveSource(requestContext) {
          childLogger.debug(`resolve source`, {
            event: 'didResolveSource'
          })
        },
        /**
         * The parsingDidStart event fires whenever Apollo Server will parse a GraphQL
         *  request to create its associated document AST.
         */
        async parsingDidStart(requestContext) {
          childLogger.debug(`parsing request to document AST`, {
            event: 'parsingDidStart'
          })
          return async err => {
            if (err) {
              childLogger.error(`parse failure`, {
                event: 'parsingDidEnd',
                error: err
              })
            } else {
              childLogger.debug(`parse success`, {
                event: 'parsingDidEnd'
              })
            }
          }
        },
        /**
         * The validationDidStart event fires whenever Apollo Server will validate a
         *  request's document AST against your GraphQL schema.
         */
        async validationDidStart(requestContext) {
          childLogger.debug(`validation`, {
            event: 'validationDidStart'
          })

          return async errs => {
            if (errs && errs.length > 0) {
              childLogger.error(`validation failure`, {
                event: 'validationDidEnd',
                errors: errs
              })
            } else {
              childLogger.debug(`validation success`, {
                event: 'validationDidEnd'
              })
            }
          }
        },
        /**
         * The didResolveOperation event fires after the graphql library successfully
         *  determines the operation to execute from a request's document AST.
         * At this stage, both the operationName string and operation AST are available.
         */
        async didResolveOperation(requestContext) {
          childLogger.debug(`resolve operation`, {
            event: 'didResolveOperation',
            operationName: requestContext.operationName,
            operation: requestContext.operation.operation
          })
        },
        async responseForOperation(requestContext) {
          childLogger.debug(`Graphql will be executing`, {
            event: 'responseForOperation'
            //context: requestContext.context
          })
          return null
        },
        async executionDidStart(requestContext) {
          childLogger.debug(
            `Apollo Server begins executing the GraphQL operation specified by a request's document AST`,
            {
              event: 'executionDidStart'
            }
          )
          return {
            async executionDidEnd(err) {
              childLogger.debug(`execution document AST end`, {
                event: 'executionDidEnd',
                metrics: requestContext.metrics
              })
              if (err) {
                childLogger.error(`execution document AST error`, {
                  event: 'executionDidEnd',
                  error: err
                })
              }
            },
            /**
             * Apollo Server is about to resolve a single field during the execution of an operation
             */
            willResolveField(fieldResolverParams) {
              childLogger.debug(`resolving field`, {
                event: 'willResolveField',
                field: `${fieldResolverParams.info.parentType.name}.${fieldResolverParams.info.fieldName}`
              })
              return (err, result) => {
                if (err) {
                  childLogger.error(`resolve field failure`, {
                    event: 'willResolveField',
                    field: `${fieldResolverParams.info.parentType.name}.${fieldResolverParams.info.fieldName}`,
                    error: err
                  })
                } else {
                  childLogger.debug(`resolved field`, {
                    event: 'willResolveField',
                    field: `${fieldResolverParams.info.parentType.name}.${fieldResolverParams.info.fieldName}`,
                    result
                  })
                }
              }
            }
          }
        },
        async didEncounterErrors(requestContext) {
          childLogger.error(
            `encounters errors while parsing, validating, or executing a GraphQL operation`,
            {
              event: 'didEncounterErrors',
              errors: requestContext.errors
            }
          )
        },
        async willSendResponse(willSendResponse) {
          childLogger.debug(`will send response`, {
            event: 'willSendResponse',
            data: willSendResponse.response.data,
            metrics: willSendResponse.metrics
          })
        }
      }
      return handler
    }
  }
}
