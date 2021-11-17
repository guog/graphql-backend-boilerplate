import { allow } from 'graphql-shield'
import { isAuthenticated } from './rules'

const rules = {
  Query: {
    '*': isAuthenticated
  },
  Mutation: {
    '*': isAuthenticated,
    signIn: allow
  }
}

export default rules
