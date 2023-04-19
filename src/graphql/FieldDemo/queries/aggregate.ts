import { queryField, list } from 'nexus'

export const FieldDemoAggregateQuery = queryField('aggregateFieldDemo', {
  type: 'AggregateFieldDemo',
  args: {
    where: 'FieldDemoWhereInput',
    orderBy: list('FieldDemoOrderByWithRelationInput'),
    cursor: 'FieldDemoWhereUniqueInput',
    take: 'Int',
    skip: 'Int'
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.fieldDemo.aggregate({ ...args, ...select }) as any
  }
})
