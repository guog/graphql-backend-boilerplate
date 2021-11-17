import { deny, shield } from 'graphql-shield'
import { ApolloError } from 'apollo-server-express'
import ruleTree from './ruleTree'
import { IsProductionMode, NODE_ENV } from '../environment'

const permission = shield(ruleTree, {
  allowExternalErrors: !IsProductionMode,
  fallbackRule: deny,
  debug: NODE_ENV !== 'production',
  fallbackError: async (thrownThing, _parent, _args, _context, _info) => {
    if (thrownThing instanceof ApolloError) {
      // expected errors
      return thrownThing
    } else if (thrownThing instanceof Error) {
      // unexpected errors
      console.error(thrownThing)
      // await Sentry.report(thrownThing)
      return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER')
    } else {
      // what the hell got thrown
      console.error('The resolver threw something that is not an error.')
      console.error(thrownThing)
      return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER')
    }
  }
})

export default permission
