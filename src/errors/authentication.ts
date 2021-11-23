import { ApolloError } from 'apollo-server-express'
import eds from './context'

/**
 * Additional data with incorrect password
 *
 * @export
 * @interface PasswordIncorrectErrorArg
 */
export interface PasswordIncorrectErrorArg {
  /**
   * Retries remaining
   *
   * @type {number}
   * @memberof PasswordIncorrectErrorArg
   */
  remainningTimes: number
}

/**
 * Additional data with user has been frozen
 *
 * @export
 * @interface UserFrozenErrorArg
 */
export interface UserFrozenErrorArg extends PasswordIncorrectErrorArg {
  /**
   * Frozen time
   *
   * @type {(Date | null)}
   * @memberof UserFrozenErrorArg
   */
  frozenAt: Date | null
  /**
   * Automatic unfrozen time
   *
   * @type {(Date | null)}
   * @memberof UserFrozenErrorArg
   */
  unfrozenAt: Date | null
}

/**
 * Sign in failure
 *
 * @export
 * @class SignInFailureError
 * @extends {ApolloError}
 */
export class SignInFailureError extends ApolloError {
  constructor() {
    super(eds.SignInFailure.message, eds.SignInFailure.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'SignInFailureError' })
  }
}

/**
 * Password incorrect
 *
 * @export
 * @class PasswordIncorrectError
 * @extends {ApolloError}
 */
export class PasswordIncorrectError extends ApolloError {
  constructor(payload?: PasswordIncorrectErrorArg) {
    super(eds.PasswordIncorrect.message, eds.PasswordIncorrect.code, {
      timestamp: new Date(),
      payload
    })

    Object.defineProperty(this, 'name', {
      value: 'PasswordIncorrectError'
    })
  }
}

/**
 * User has been disabled error
 *
 * @export
 * @class UserDisabledError
 * @extends {ApolloError}
 */
export class UserDisabledError extends ApolloError {
  constructor() {
    super(eds.UserDisabled.message, eds.UserDisabled.code, {
      timestamp: new Date()
    })
    Object.defineProperty(this, 'name', {
      value: 'UserDisabledError'
    })
  }
}

/**
 * user has been frozen error
 *
 * @export
 * @class UserFrozenError
 * @extends {ApolloError}
 */
export class UserFrozenError extends ApolloError {
  constructor(payload: UserFrozenErrorArg) {
    super(eds.UserFrozen.message, eds.UserFrozen.code, {
      timestamp: new Date(),
      payload
    })

    Object.defineProperty(this, 'name', {
      value: 'UserFrozenError'
    })
  }
}

/**
 * User not exist error.
 *
 * @export
 * @class UserNotExistError
 * @extends {ApolloError}
 */
export class UserNotExistError extends ApolloError {
  constructor() {
    super(eds.UserNotExist.message, eds.UserNotExist.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'UserNotExistError' })
  }
}

export class AuthenticationError extends ApolloError {
  constructor() {
    super(eds.Unauthenticated.message, eds.Unauthenticated.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'AuthenticationError' })
  }
}

export class ForbiddenError extends ApolloError {
  constructor() {
    super(eds.Forbidden.message, eds.Forbidden.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'ForbiddenError' })
  }
}

export class InvalidTokenError extends ApolloError {
  constructor() {
    super(eds.InvalidToken.message, eds.InvalidToken.code, {
      timestamp: new Date()
    })

    Object.defineProperty(this, 'name', { value: 'InvalidTokenError' })
  }
}
