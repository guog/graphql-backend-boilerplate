import { mutationField, nonNull } from 'nexus'

export const FieldDemoUpsertOneMutation = mutationField('upsertOneFieldDemo', {
  type: nonNull('FieldDemo'),
  args: {
    where: nonNull('FieldDemoWhereUniqueInput'),
    create: nonNull('FieldDemoCreateInput'),
    update: nonNull('FieldDemoUpdateInput')
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.fieldDemo.upsert({
      ...args,
      ...select
    })
  }
})
