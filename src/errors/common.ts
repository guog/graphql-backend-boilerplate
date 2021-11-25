import { ApolloError } from 'apollo-server-core'
import eds from './context'

export class NotFoundError extends ApolloError {
  constructor() {
    super(eds.NotFound.message, eds.NotFound.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'NotFoundError' })
  }
}

export class OverLimitError extends ApolloError {
  constructor() {
    super(eds.OverLimit.message, eds.OverLimit.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'OverLimitError' })
  }
}

export class UniqueError extends ApolloError {
  constructor(fieldName?: string) {
    super(eds.Unique.message, eds.Unique.code, {
      timestamp: new Date(),
      fieldName
    })

    Object.defineProperty(this, 'name', { value: 'UniqueError' })
  }
}

export class InternalServerError extends ApolloError {
  constructor(message?: string, code?: string) {
    super(
      message || eds.InternalServerError.message,
      code || eds.InternalServerError.code,
      {
        timestamp: new Date()
      }
    )

    Object.defineProperty(this, 'name', { value: 'InternalServerError' })
  }
}
