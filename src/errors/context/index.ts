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
    message: 'sign in failure'
  },
  UserNotExist: {
    code: USER_NOT_EXIST,
    message: 'user not exist'
  },
  UserDisabled: {
    code: USER_DISABLED,
    message: 'user has been disabled'
  },
  PasswordIncorrect: {
    code: PASSWORD_INCORRECT,
    message: 'password incorrect'
  },
  UserFrozen: {
    code: USER_FROZEN,
    message: 'user has been frozen'
  },
  Unauthenticated: {
    code: UNAUTHENTICATED,
    message: 'authenticate failure'
  },
  OverLimit: {
    code: OVER_LIMIT,
    message: 'over limit'
  },
  InvalidToken: {
    code: INVALID_TOKEN,
    message: 'invalid token'
  },
  Forbidden: {
    code: FORBIDDEN,
    message: 'forbidden'
  },
  NotFound: {
    code: NOT_FOUND,
    message: 'not found'
  },
  Unique: {
    code: UNIQUE,
    message: 'unique value, but already exists '
  }
})

export default ErrorDefine
