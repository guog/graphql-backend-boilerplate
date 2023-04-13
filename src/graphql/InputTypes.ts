import { enumType, inputObjectType, objectType } from 'nexus'

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive']
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc']
})

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable'
  ]
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'createdAt',
    'updatedAt',
    'disabled',
    'name',
    'password',
    'nickName'
  ]
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('disabled', { type: 'BoolFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('nickName', { type: 'StringFilter' })
  }
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('disabled', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('nickName', { type: 'SortOrder' })
  }
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('name', { type: 'String' })
  }
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('disabled', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('nickName', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
  }
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('disabled', { type: 'BoolWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('nickName', { type: 'StringWithAggregatesFilter' })
  }
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('disabled', { type: 'Boolean' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('nickName', { type: 'String' })
  }
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('disabled', { type: 'Boolean' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('nickName', { type: 'String' })
  }
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('disabled', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('nickName', { type: 'StringFieldUpdateOperationsInput' })
  }
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('disabled', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('nickName', { type: 'StringFieldUpdateOperationsInput' })
  }
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('disabled', { type: 'Boolean' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('nickName', { type: 'String' })
  }
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('disabled', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('nickName', { type: 'StringFieldUpdateOperationsInput' })
  }
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('disabled', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('nickName', { type: 'StringFieldUpdateOperationsInput' })
  }
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  }
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  }
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  }
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('disabled', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('nickName', { type: 'SortOrder' })
  }
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('disabled', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('nickName', { type: 'SortOrder' })
  }
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('disabled', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('nickName', { type: 'SortOrder' })
  }
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  }
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  }
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  }
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  }
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  }
})

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  }
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  }
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  }
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  }
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  }
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  }
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  }
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  }
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  }
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('disabled', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('nickName', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  }
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('disabled', { type: 'Boolean' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('nickName', { type: 'String' })
  }
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('disabled', { type: 'Boolean' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('nickName', { type: 'String' })
  }
})
