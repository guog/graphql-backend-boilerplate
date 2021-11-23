import { allow } from 'graphql-shield'
import { isAuthenticated } from './rules'

const permissions = {
  Query: {
    '*': isAuthenticated
  },
  Mutation: {
    '*': isAuthenticated,
    signIn: allow
  }
}

export default permissions
