import { GraphQLError } from 'graphql'
import eds from './context'

export class NotFoundError extends GraphQLError {
  constructor() {
    super(eds.NotFound.message, {
      extensions: { code: eds.NotFound.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'NotFoundError' })
  }
}

export class OverLimitError extends GraphQLError {
  constructor() {
    super(eds.OverLimit.message, {
      extensions: { code: eds.OverLimit.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'OverLimitError' })
  }
}

export class UniqueError extends GraphQLError {
  constructor(fieldName?: string) {
    super(eds.Unique.message, {
      extensions: { code: eds.Unique.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'UniqueError' })
  }
}

export class InternalServerError extends GraphQLError {
  constructor(message?: string, code?: string) {
    super(message || eds.InternalServerError.message, {
      extensions: {
        code: code || eds.InternalServerError.code,
        timestamp: new Date()
      }
    })

    Object.defineProperty(this, 'name', { value: 'InternalServerError' })
  }
}
