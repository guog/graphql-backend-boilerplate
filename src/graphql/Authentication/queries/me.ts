import { nonNull, queryField } from 'nexus'
import { AuthenticationError } from '../../../errors'

export const MeQuery = queryField('me', {
  type: nonNull('User'),
  description: 'get current user info',
  async resolve(_parent, _args, { prisma, user, select }, _info) {
    if (!user) {
      throw new AuthenticationError()
    }
    const result = await prisma.user.findUnique({
      where: { id: user.id },
      ...select
    })
    if (!result) {
      throw new AuthenticationError()
    } else {
      return result
    }
  }
})
