/**
 * database connection string
 */
export const DATABASE_URL = process.env.DATABASE_URL

/**
 * App Secret, Change to your Secret
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

/**
 * expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).
 * Eg: 60, "2 days", "10h", "7d"
 */
export const APP_TOKEN_EXPIRES_IN = process.env.APP_TOKEN_EXPIRES_IN || '7d'

export const NODE_ENV = process.env.NODE_ENV || 'production'

export const IsProductionMode = process.env.NODE_ENV === 'production'

export const IsDevelopmentMode = process.env.NODE_ENV === 'development'

export const APP_SHIELD_DISABLED = process.env.APP_SHIELD_DISABLED === 'true'
