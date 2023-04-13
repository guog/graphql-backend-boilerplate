import { GraphQLError } from 'graphql'
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
 * @extends {GraphQLError}
 */
export class SignInFailureError extends GraphQLError {
  constructor() {
    super(eds.SignInFailure.message, {
      extensions: { code: eds.SignInFailure.code, timestamp: new Date() }
    })
    Object.defineProperty(this, 'name', { value: 'SignInFailureError' })
  }
}

/**
 * Password incorrect
 *
 * @export
 * @class PasswordIncorrectError
 * @extends {GraphQLError}
 */
export class PasswordIncorrectError extends GraphQLError {
  constructor(payload?: PasswordIncorrectErrorArg) {
    super(eds.PasswordIncorrect.message, {
      extensions: { code: eds.PasswordIncorrect.code, timestamp: new Date() }
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
 * @extends {GraphQLError}
 */
export class UserDisabledError extends GraphQLError {
  constructor() {
    super(eds.UserDisabled.message, {
      extensions: { code: eds.UserDisabled.code, timestamp: new Date() }
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
 * @extends {GraphQLError}
 */
export class UserFrozenError extends GraphQLError {
  constructor(payload: UserFrozenErrorArg) {
    super(eds.UserFrozen.message, {
      extensions: { code: eds.UserFrozen.code, timestamp: new Date() }
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
 * @extends {GraphQLError}
 */
export class UserNotExistError extends GraphQLError {
  constructor() {
    super(eds.UserNotExist.message, {
      extensions: { code: eds.UserNotExist.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'UserNotExistError' })
  }
}

export class AuthenticationError extends GraphQLError {
  constructor() {
    super(eds.Unauthenticated.message, {
      extensions: { code: eds.Unauthenticated.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'AuthenticationError' })
  }
}

export class ForbiddenError extends GraphQLError {
  constructor() {
    super(eds.Forbidden.message, {
      extensions: { code: eds.Forbidden.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'ForbiddenError' })
  }
}

export class InvalidTokenError extends GraphQLError {
  constructor() {
    super(eds.InvalidToken.message, {
      extensions: { code: eds.InvalidToken.code, timestamp: new Date() }
    })

    Object.defineProperty(this, 'name', { value: 'InvalidTokenError' })
  }
}
