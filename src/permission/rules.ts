import { rule } from 'graphql-shield'
import { isEmpty } from 'lodash'
import type { Context } from '../context'
import { AuthenticationError } from '../errors'

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (_parent, _args, { user }: Context) => {
    if (isEmpty(user)) {
      return new AuthenticationError()
    }
    return true
  }
)
