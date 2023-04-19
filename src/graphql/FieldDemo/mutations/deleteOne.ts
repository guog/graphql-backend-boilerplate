import { mutationField, nonNull } from 'nexus'

export const FieldDemoDeleteOneMutation = mutationField('deleteOneFieldDemo', {
  type: 'FieldDemo',
  args: {
    where: nonNull('FieldDemoWhereUniqueInput')
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.fieldDemo.delete({
      where,
      ...select
    })
  }
})
