import { compare, hash } from 'bcryptjs'
import type { Request } from 'express'
import { sign, verify } from 'jsonwebtoken'
import { replace } from 'lodash'
import { APP_SECRET, APP_TOKEN_EXPIRES_IN } from '../environment'
import prisma from '../prismaClient'

interface UserToken {
  userId: string
}

const AuthorizationSchema = 'Bearer '
const AuthorizationHeaderName = 'Authorization'

/**
 * Extract userId from JWT.
 *
 * @param {string} token JWT string
 * @return {string} user id if available. '' otherwise.
 */
function getUserIdFromToken(token: string) {
  const userToken = resolveToken(token)

  return userToken?.userId || ''
}

/**
 * get token from http 'Authorization' header
 *
 * @param {Request} req
 * @return {*}  {(string)}
 */
function getToken(req: Request): string {
  const authorization = req.get(AuthorizationHeaderName)
  return replace(authorization, AuthorizationSchema, '')
}

export async function getUser(req: Request) {
  let token = getToken(req)
  const id = getUserIdFromToken(token)
  // FIXME: cache data
  return await prisma.user.findUnique({
    where: { id }
  })
}

export function generateToken(
  payload: object,
  expiresIn: string | number = APP_TOKEN_EXPIRES_IN
) {
  return sign(payload, APP_SECRET, { expiresIn })
}

export function resolveToken(token: string) {
  try {
    return verify(token, APP_SECRET) as UserToken
  } catch (err: any) {
    console.error(err.message)
    throw err
  }
}

/**
 * validate password
 *
 * @export
 * @param {string} password origin password
 * @param {string} hash encrypt password
 * @return {Promise<boolean>} true or false
 */
export async function validatePassword(password: string, hash: string) {
  return await compare(password, hash)
}

/**
 * encrypt password
 *
 * @export
 * @param {string} password origin password
 * @return {*}
 */
export async function encryptPassword(password: string) {
  return await hash(password, 10)
}
