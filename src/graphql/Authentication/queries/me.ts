import { isEmpty } from 'lodash'
import { nonNull, queryField } from 'nexus'
import { AuthenticationError } from '../../../errors'

export const MeQuery = queryField('me', {
  type: nonNull('User'),
  description: 'get current user info',
  resolve(_parent, _args, { prisma, user, select }, _info) {
    if (isEmpty(user)) {
      throw new AuthenticationError()
    }
    return prisma.user.findUnique({ where: { id: user.id }, ...select })
  }
})
