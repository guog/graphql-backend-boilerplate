import { queryField, list } from 'nexus'

export const FieldDemoFindFirstQuery = queryField('findFirstFieldDemo', {
  type: 'FieldDemo',
  args: {
    where: 'FieldDemoWhereInput',
    orderBy: list('FieldDemoOrderByWithRelationInput'),
    cursor: 'FieldDemoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FieldDemoScalarFieldEnum')
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.fieldDemo.findFirst({
      ...args,
      ...select
    })
  }
})
