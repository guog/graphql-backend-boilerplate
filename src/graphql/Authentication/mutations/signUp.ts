import { Chance } from 'chance'
import { mutationField, nonNull } from 'nexus'
import { UniqueError } from '../../../errors'
import { encryptPassword } from '../../../utils/auth'
import { userIsExit } from '../utils'

export const SignUp = mutationField('signUp', {
  type: nonNull('User'),
  description: 'user sign up',
  args: {
    data: nonNull('SignUpInput')
  },
  async resolve(_parent, { data }, { prisma, select }) {
    const { name, password, nickName } = data
    const hashedPassword = await encryptPassword(password)

    const exist = await userIsExit(name)
    if (exist) {
      throw new UniqueError(name)
    }

    const user = await prisma.user.create({
      data: {
        name,
        password: hashedPassword,
        nickName: nickName || new Chance().first()
      },
      ...select
    })

    return user
  }
})
