import {
  FORBIDDEN,
  INVALID_TOKEN,
  NOT_FOUND,
  OVER_LIMIT,
  PASSWORD_INCORRECT,
  SIGN_IN_FAILURE,
  UNAUTHENTICATED,
  UNIQUE,
  USER_DISABLED,
  USER_FROZEN,
  USER_NOT_EXIST
} from './codes'

/**
 * Error code and message
 */
const ErrorDefine = Object.freeze({
  SignInFailure: {
    code: SIGN_IN_FAILURE,
    description: 'sign in failure'
  },
  UserNotExist: {
    code: USER_NOT_EXIST,
    description: 'user not exist'
  },
  UserDisabled: {
    code: USER_DISABLED,
    description: 'user has been disabled'
  },
  PasswordIncorrect: {
    code: PASSWORD_INCORRECT,
    description: 'password incorrect'
  },
  UserFrozen: {
    code: USER_FROZEN,
    description: 'user has been frozen'
  },
  Unauthenticated: {
    code: UNAUTHENTICATED,
    description: 'authenticate failure'
  },
  OverLimit: {
    code: OVER_LIMIT,
    description: 'over limit'
  },
  InvalidToken: {
    code: INVALID_TOKEN,
    description: 'invalid token'
  },
  Forbidden: {
    code: FORBIDDEN,
    description: 'forbidden'
  },
  NotFound: {
    code: NOT_FOUND,
    description: 'not found'
  },
  Unique: {
    code: UNIQUE,
    description: 'unique value, but already exists '
  }
})

export default ErrorDefine
