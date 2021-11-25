import { Prisma, PrismaClient } from '@prisma/client'
import { IsProductionMode } from './environment'
import { InternalServerError } from './errors'

function createPrismaClient(): PrismaClient {
  const prisma = new PrismaClient({
    log: IsProductionMode
      ? [{ emit: 'stdout', level: 'error' }]
      : [
          { emit: 'stdout', level: 'query' },
          { emit: 'stdout', level: 'info' },
          { emit: 'stdout', level: 'warn' },
          { emit: 'stdout', level: 'error' }
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

  //! global prisma error handle
  prisma.$use(async (params, next) => {
    try {
      const result = await next(params)
      return result
    } catch (err) {
      console.error('v-----v')
      console.error('Prisma Error:', new Date(), JSON.stringify(params))
      console.error(err)
      console.error('^-----^')
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
