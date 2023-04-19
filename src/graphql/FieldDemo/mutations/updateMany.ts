import { mutationField, nonNull } from 'nexus'

export const FieldDemoUpdateManyMutation = mutationField(
  'updateManyFieldDemo',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('FieldDemoUpdateManyMutationInput'),
      where: 'FieldDemoWhereInput'
    },
    resolve(_parent, args, { prisma }) {
      return prisma.fieldDemo.updateMany(args as any)
    }
  }
)
