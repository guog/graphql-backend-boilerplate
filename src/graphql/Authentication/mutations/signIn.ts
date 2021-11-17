import { mutationField, nonNull, stringArg } from 'nexus'
import {
  PasswordIncorrectError,
  UserDisabledError,
  UserNotExistError
} from '../../../errors'
import { generateToken, validatePassword } from '../../../utils/auth'

export const SignInMutation = mutationField('signIn', {
  type: nonNull('AuthPayload'),
  description: `Sign In`,
  args: {
    name: nonNull(
      stringArg({
        description: `user name`
      })
    ),
    password: nonNull(
      stringArg({
        description: `password`
      })
    )
  },
  async resolve(_parent, { name, password }, { prisma }, _info) {
    const user = await prisma.user.findUnique({
      where: {
        name
      }
    })

    if (!user) {
      throw new UserNotExistError()
    }
    if (user.disabled === true) {
      throw new UserDisabledError()
    }

    const valid = await validatePassword(password, user?.password || '')

    if (!valid) {
      throw new PasswordIncorrectError()
    }

    const token = generateToken({ userId: user.id })

    return {
      token
    }
  }
})
