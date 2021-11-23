import type { PrismaClient, User } from '@prisma/client'
import type { Request, Response } from 'express'
import { APP_SHIELD_DISABLED } from './environment'
import prisma from './prismaClient'
import { createContextUser } from './utils/auth'

export interface Context {
  prisma: PrismaClient
  select: any
  req: Request
  res: Response
  user?: User
}

export async function createContext(params: {
  req: Request
  res: Response
  /* connection?: unknown */
}): Promise<Context> {
  const { req, res } = params

  const user =
    req?.body?.operationName !== 'IntrospectionQuery' && !APP_SHIELD_DISABLED
      ? await createContextUser(req)
      : null

  return {
    prisma,
    res,
    req,
    user,
    select: {}
  }
}
