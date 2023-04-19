import { mutationField, nonNull } from 'nexus'

export const FieldDemoDeleteManyMutation = mutationField(
  'deleteManyFieldDemo',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'FieldDemoWhereInput'
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.fieldDemo.deleteMany({ where } as any)
    }
  }
)
