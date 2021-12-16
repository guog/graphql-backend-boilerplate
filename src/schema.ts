import { paljs } from '@paljs/nexus'
import { makeSchema, queryComplexityPlugin } from 'nexus'
import { validatePlugin } from 'nexus-validate'
import * as path from 'path'
import { IsProductionMode } from './environment'
import * as types from './graphql'

const schema = makeSchema({
  types,
  plugins: [
    validatePlugin(),
    paljs({
      excludeFields: ['password'],
      filterInputs: input =>
        input.fields.filter(field => field.name !== 'passowrd')
    }),
    queryComplexityPlugin()
  ],
  outputs: {
    schema: path.join(__dirname, '../schema.graphql'),
    typegen: path.join(
      __dirname,
      '../node_modules/@types/nexus-typegen/index.d.ts'
    )
  },
  contextType: !IsProductionMode
    ? {
        module: path.join(__dirname, 'context.ts'),
        export: 'Context'
      }
    : undefined
})

export default schema
