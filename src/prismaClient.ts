import { Prisma, PrismaClient } from '@prisma/client'
import ms from 'ms'
import { IsDevelopmentMode } from './environment'
import { InternalServerError } from './errors'
import logger from './winstonLogger'

function createPrismaClient(): PrismaClient {
  const prismaLogger = logger.child({ source: 'PrismaClient' })
  const prisma = new PrismaClient({
    log: [
      { emit: 'event', level: 'query' },
      { emit: 'event', level: 'info' },
      { emit: 'event', level: 'warn' },
      { emit: 'event', level: 'error' }
    ]
  })

  //! Specify soft deletion models here.
  // prisma.$use(async (params, next) => {
  //   const softDeletionModels = [
  //   ];

  //   if (params.model && softDeletionModels.includes(params.model)) {
  //     if (params.action === 'delete') {
  //       params.action = 'update';
  //       params.args.data = { deletedAt: new Date().toISOString() };
  //     }

  //     if (params.action === 'deleteMany') {
  //       params.action = 'updateMany';

  //       if (params.args.data !== undefined) {
  //         params.args.data.deletedAt = new Date().toISOString();
  //       } else {
  //         params.args.data = { deletedAt: new Date().toISOString() };
  //       }
  //     }
  //   }

  //   return next(params);
  // });

  //const outputLog=(e:)

  const createLogObj = (e: {
    timestamp?: Date
    target?: string
    params?: string
    duration?: number
    message?: string
  }) => {
    return {
      // 有些timestamp传的值为数字,即1970年以来的秒
      timestamp:
        e.timestamp && e.timestamp.toISOString
          ? e.timestamp.toISOString()
          : e.timestamp,
      target: e.target,
      duration: e.duration ? ms(e.duration, { long: true }) : undefined,
      params: e.params
    }
  }

  prisma.$on('query', e => {
    prismaLogger.debug(e.query, createLogObj(e))
  })

  prisma.$on('info', e => {
    prismaLogger.info(e.message, createLogObj(e))
  })

  prisma.$on('warn', e => {
    prismaLogger.warn(e.message, createLogObj(e))
  })

  prisma.$on('error', e => {
    prismaLogger.error(e.message, createLogObj(e))
  })
  //! global prisma error handle
  prisma.$use(async (params, next) => {
    try {
      const result = await next(params)
      return result
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new InternalServerError('PrismaClientKnownRequestError', err.code)
      } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        throw new InternalServerError('PrismaClientUnknownRequestError')
      } else if (err instanceof Prisma.PrismaClientRustPanicError) {
        throw new InternalServerError('PrismaClientRustPanicError')
      } else if (err instanceof Prisma.PrismaClientInitializationError) {
        throw new InternalServerError(
          'PrismaClientInitializationError',
          err.errorCode
        )
      } else if (err instanceof Prisma.PrismaClientValidationError) {
        throw new InternalServerError('PrismaClientValidationError')
      } else {
        throw err
      }
    }
  })

  return prisma
}

const prismaClient = createPrismaClient()

export default prismaClient
