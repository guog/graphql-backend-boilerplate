import { objectType } from 'nexus'

export const FieldDemo = objectType({
  nonNullDefaults: {
    output: true,
    input: false
  },
  name: 'FieldDemo',
  definition(t) {
    t.string('id')
    t.nullable.bigint('theBigInt')
    t.nullable.field('theDateTime', { type: 'DateTime' })
    t.nullable.bytes('theBytes')
    t.nullable.decimal('theDecimal')
    t.nullable.json('theJson')
    t.nullable.string('theString')
    t.nullable.int('theInt')
    t.nullable.boolean('theBoolean')
    t.nullable.float('theFloat')
  }
})
