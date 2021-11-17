import { ApolloError } from 'apollo-server-core'
import eds from './context'

export class NotFoundError extends ApolloError {
  constructor() {
    super(eds.NotFound.description, eds.NotFound.code, {
      description: eds.NotFound.description,
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'NotFoundError' })
  }
}

export class OverLimitError extends ApolloError {
  constructor() {
    super(eds.OverLimit.description, eds.OverLimit.code, {
      description: eds.OverLimit.description,
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'OverLimitError' })
  }
}

export class UniqueError extends ApolloError {
  constructor(fieldName?: string) {
    super(eds.Unique.description, eds.Unique.code, {
      description: eds.Unique.description,
      timestamp: new Date(),
      fieldName
    })

    Object.defineProperty(this, 'name', { value: 'UniqueError' })
  }
}
