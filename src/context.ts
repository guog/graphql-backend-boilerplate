import type { PrismaClient /* , User */ } from '@prisma/client'
import type { Request, Response } from 'express'
import prisma from './prismaClient'
//import { getUser } from './utils/auth'

export interface Context {
  prisma: PrismaClient
  select: any
  req: Request
  res: Response
  //user?: User
}

export async function createContext(params: {
  req: Request
  res: Response
  connection?: unknown
}): Promise<Context> {
  const { req, res } = params
  /* switch (req.body.operationName) {
    case 'IntrospectionQuery':
      console.info('IntrospectionQuery')
      break
    default:
      console.info(req.body)
      break
  } */
  // const user = await getUser(req)
  return {
    prisma,
    res,
    req,
    //user,
    select: {}
  }
}
