import { mutationField, nonNull } from 'nexus'

export const FieldDemoCreateOneMutation = mutationField('createOneFieldDemo', {
  type: nonNull('FieldDemo'),
  args: {
    data: nonNull('FieldDemoCreateInput')
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.fieldDemo.create({
      data,
      ...select
    })
  }
})
