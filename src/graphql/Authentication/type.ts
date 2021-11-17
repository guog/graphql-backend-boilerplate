import { inputObjectType, objectType } from 'nexus'

export const AuthPayload = objectType({
  name: 'AuthPayload',
  description: `user's token on successful login`,
  definition(t) {
    t.nonNull.string('token', { description: `user's token` })
  }
})

export const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  description: 'user sign up input type',
  definition(t) {
    t.nonNull.string('password')
    t.nonNull.string('name')
    t.nullable.string('nickName')
  }
})

export const UpdateProfileInput = inputObjectType({
  name: 'UpdateProfileInput',
  description: 'update profile input type',
  definition(t) {
    t.nullable.string('nickName')
  }
})
