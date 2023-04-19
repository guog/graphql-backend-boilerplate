import { queryField, nonNull, list } from 'nexus'

export const FieldDemoFindCountQuery = queryField('findManyFieldDemoCount', {
  type: nonNull('Int'),
  args: {
    where: 'FieldDemoWhereInput',
    orderBy: list('FieldDemoOrderByWithRelationInput'),
    cursor: 'FieldDemoWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FieldDemoScalarFieldEnum')
  },
  resolve(_parent, args, { prisma }) {
    return prisma.fieldDemo.count(args as any)
  }
})
