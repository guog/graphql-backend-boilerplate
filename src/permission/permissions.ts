import { allow } from 'graphql-shield'
import { isAuthenticated } from './rules'

const permissions = {
  Query: {
    '*': allow
  },
  Mutation: {
    '*': allow,
    signIn: allow
  }
}

export default permissions
