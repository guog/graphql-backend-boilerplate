import { mutationField, nonNull } from 'nexus'
import { AuthenticationError } from '../../../errors'

export const updateProfileMutation = mutationField('updateProfile', {
  type: nonNull('User'),
  args: {
    data: nonNull('UpdateProfileInput')
  },
  resolve(_parent, { data }, { prisma, user, select }) {
    if (!user) {
      throw new AuthenticationError()
    }
    return prisma.user.update({
      where: { id: user.id },
      data,
      ...select
    })
  }
})
