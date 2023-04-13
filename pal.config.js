// @ts-check

/**
 * @type {import('@paljs/types').Config}
 **/

module.exports = {
  backend: {
    generator: 'nexus',
    excludeFieldsByModel: { User: ['password'] },
    excludeModels: [
      {
        name: 'User',
        queries: true,
        mutations: true
      }
    ],
    //excludeInputFields: ['password'],
    output: './.generated/graphql/',
    schema: './prisma/schema.prisma'
  },
  frontend: {
    admin: false,
    graphql: {
      output: './.generated/client/',
      excludeFieldsByModel: { User: ['password'] },
      excludeModels: [
        {
          name: 'User',
          queries: true,
          mutations: true
        }
      ],
      excludeInputFields: ['password'],
      schema: './prisma/schema.prisma'
    }
  }
}
