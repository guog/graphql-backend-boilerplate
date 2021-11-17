import { PrismaClient } from '@prisma/client'
import { IsProductionMode } from './environment'

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

  return prisma
}

const prismaClient = createPrismaClient()

export default prismaClient
