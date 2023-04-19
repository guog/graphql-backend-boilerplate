import { queryField, nonNull } from 'nexus'

export const FieldDemoFindUniqueQuery = queryField('findUniqueFieldDemo', {
  type: 'FieldDemo',
  args: {
    where: nonNull('FieldDemoWhereUniqueInput')
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.fieldDemo.findUnique({
      where,
      ...select
    })
  }
})
