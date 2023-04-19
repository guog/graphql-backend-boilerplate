import { mutationField, nonNull } from 'nexus'

export const FieldDemoUpdateOneMutation = mutationField('updateOneFieldDemo', {
  type: nonNull('FieldDemo'),
  args: {
    data: nonNull('FieldDemoUpdateInput'),
    where: nonNull('FieldDemoWhereUniqueInput')
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.fieldDemo.update({
      where,
      data,
      ...select
    })
  }
})
