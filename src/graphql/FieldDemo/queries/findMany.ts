import { queryField, nonNull, list } from 'nexus'

export const FieldDemoFindManyQuery = queryField('findManyFieldDemo', {
  type: nonNull(list(nonNull('FieldDemo'))),
  args: {
    where: 'FieldDemoWhereInput',
    orderBy: list('FieldDemoOrderByWithRelationInput'),
    cursor: 'FieldDemoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FieldDemoScalarFieldEnum')
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.fieldDemo.findMany({
      ...args,
      ...select
    })
  }
})
