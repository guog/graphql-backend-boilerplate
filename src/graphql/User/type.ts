import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false
  },
  name: 'User',
  description: `User Account`,
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.boolean('disabled')
    t.string('name')
    t.string('nickName')
  }
})
