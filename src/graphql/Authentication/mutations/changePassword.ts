import { mutationField, nonNull, stringArg } from 'nexus'
import { AuthenticationError, PasswordIncorrectError } from '../../../errors'
import {
  encryptPassword,
  generateToken,
  validatePassword
} from '../../../utils/auth'

export const ChangePasswordMutation = mutationField('changePassword', {
  type: nonNull('AuthPayload'),
  description: `Change Password`,
  args: {
    password: nonNull(
      stringArg({
        description: `origin password`
      })
    ),
    newPassword: nonNull(
      stringArg({
        description: `new password`
      })
    )
  },
  async resolve(_parent, { password, newPassword }, { prisma, user }, _info) {
    if (!user) {
      throw new AuthenticationError()
    }

    const valid = await validatePassword(password, user.password)
    if (!valid) {
      throw new PasswordIncorrectError()
    }

    const hashedNewPassword = await encryptPassword(newPassword)
    const result = await prisma.user.update({
      data: {
        password: hashedNewPassword
      },
      where: { id: user.id },
      select: { id: true }
    })

    return {
      token: generateToken({ userId: result.id })
    }
  }
})
