import { allow, deny, IRules, shield } from 'graphql-shield'
import { ApolloError } from 'apollo-server-express'
import permissions from './permissions'
import { IsProductionMode, NODE_ENV } from '../environment'
import { isEmpty } from 'lodash'

const permission = shield(permissions as any, {
  allowExternalErrors: !IsProductionMode,
  fallbackRule: allow,
  debug: NODE_ENV !== 'production',
  fallbackError: async (thrownThing, _parent, _args, _context, _info) => {
    if (thrownThing instanceof ApolloError) {
      return thrownThing
    } else if (thrownThing instanceof Error) {
      console.error(thrownThing)
      // await Sentry.report(thrownThing)
      return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER')
    } else {
      // what the hell got thrown
      // console.error('The resolver threw something that is not an error.')
      console.error(thrownThing)
      return new ApolloError('Internal server error', 'ERR_INTERNAL_SERVER')
    }
  }
})

export default permission
