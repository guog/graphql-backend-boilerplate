import { compare, hash } from 'bcryptjs'
import type { Request } from 'express'
import { sign, verify } from 'jsonwebtoken'
import { isEmpty, replace } from 'lodash'
import { APP_SECRET, APP_TOKEN_EXPIRES_IN } from '../environment'
import prisma from '../prismaClient'

interface UserToken {
  userId: string
}

const AuthorizationSchema = 'Bearer '
const AuthorizationHeaderName = 'Authorization'

async function fetchUserById(id: string) {
  if (isEmpty(id)) {
    return null
  }
  return await prisma.user.findUnique({
    where: { id }
  })
}

/**
 * get token from http 'Authorization' header
 *
 * @param {Request} req
 * @return {*}  {(string)}
 */
function getToken(req: Request): string {
  const authorization = req.get(AuthorizationHeaderName) || ''
  return replace(authorization, AuthorizationSchema, '')
}

export async function createContextUser(req: Request) {
  try {
    const token = getToken(req)
    if (!isEmpty(token)) {
      const verifiedToken = (verify(token, APP_SECRET) as UserToken) || null
      return await fetchUserById(verifiedToken.userId)
    }
  } catch (err) {
    console.error(err)
  }

  return null
}

export function generateToken(
  payload: object,
  expiresIn: string | number = APP_TOKEN_EXPIRES_IN
) {
  return AuthorizationSchema + sign(payload, APP_SECRET, { expiresIn })
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
