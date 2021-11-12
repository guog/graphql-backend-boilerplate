import { max } from 'lodash'
import path from 'path'

/**
 * database connection string
 */
export const DATABASE_URL = process.env.DATABASE_URL

/**
 * App Secret
 */
export const APP_SECRET = process.env.APP_SECRET || 'MySecret'

/**
 * service port
 */
export const APP_PORT =
  typeof process.env.PORT === 'string'
    ? parseInt(process.env.PORT, 10)
    : process.env.NODE_ENV === 'production'
    ? 8080
    : 4000

export const APP_PATH = process.env.APP_PATH || '/graphql'

export const APP_TOKEN_EXPIRES_IN =
  max([parseInt(process.env.APP_TOKEN_EXPIRES_IN), 0]) || 7

export const NODE_ENV = process.env.NODE_ENV || 'production'

export const IsProductionMode = process.env.NODE_ENV === 'production'
