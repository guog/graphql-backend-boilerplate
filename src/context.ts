import type { PrismaClient, User } from '@prisma/client'
import type { Request, Response } from 'express'
import { APP_SHIELD_DISABLED } from './environment'
import prisma from './prismaClient'
import { createContextUser } from './utils/auth'
import { type BaseContext } from '@apollo/server'

export interface Context extends BaseContext {
  prisma: PrismaClient
  select: any
  req: Request
  res: Response
  user: User | null
  shield: boolean
}

export async function createContext(params: {
  req: Request
  res: Response
  connection?: unknown
}): Promise<Context> {
  const { req, res } = params
  const shield = !APP_SHIELD_DISABLED
  const user =
    req?.body?.operationName !== 'IntrospectionQuery' && shield
      ? await createContextUser(req)
      : null

  return {
    prisma,
    res,
    req,
    user,
    shield,
    select: {}
  }
}
