import { enumType, inputObjectType, objectType } from 'nexus'

export const FieldDemoScalarFieldEnum = enumType({
  name: 'FieldDemoScalarFieldEnum',
  members: [
    'id',
    'theBigInt',
    'theDateTime',
    'theBytes',
    'theDecimal',
    'theJson',
    'theString',
    'theInt',
    'theBoolean',
    'theFloat'
  ]
})

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull']
})

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ['DbNull', 'JsonNull']
})

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

export const FieldDemoWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'FieldDemoWhereInput' })
    t.list.field('OR', { type: 'FieldDemoWhereInput' })
    t.list.field('NOT', { type: 'FieldDemoWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('theBigInt', { type: 'BigIntNullableFilter' })
    t.field('theDateTime', { type: 'DateTimeNullableFilter' })
    t.field('theBytes', { type: 'BytesNullableFilter' })
    t.field('theDecimal', { type: 'DecimalNullableFilter' })
    t.field('theJson', { type: 'JsonNullableFilter' })
    t.field('theString', { type: 'StringNullableFilter' })
    t.field('theInt', { type: 'IntNullableFilter' })
    t.field('theBoolean', { type: 'BoolNullableFilter' })
    t.field('theFloat', { type: 'FloatNullableFilter' })
  }
})

export const FieldDemoOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDateTime', { type: 'SortOrder' })
    t.field('theBytes', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theJson', { type: 'SortOrder' })
    t.field('theString', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theBoolean', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const FieldDemoWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  }
})

export const FieldDemoOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDateTime', { type: 'SortOrder' })
    t.field('theBytes', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theJson', { type: 'SortOrder' })
    t.field('theString', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theBoolean', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
    t.field('_count', { type: 'FieldDemoCountOrderByAggregateInput' })
    t.field('_avg', { type: 'FieldDemoAvgOrderByAggregateInput' })
    t.field('_max', { type: 'FieldDemoMaxOrderByAggregateInput' })
    t.field('_min', { type: 'FieldDemoMinOrderByAggregateInput' })
    t.field('_sum', { type: 'FieldDemoSumOrderByAggregateInput' })
  }
})

export const FieldDemoScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'FieldDemoScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'FieldDemoScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'FieldDemoScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('theBigInt', { type: 'BigIntNullableWithAggregatesFilter' })
    t.field('theDateTime', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('theBytes', { type: 'BytesNullableWithAggregatesFilter' })
    t.field('theDecimal', { type: 'DecimalNullableWithAggregatesFilter' })
    t.field('theJson', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('theString', { type: 'StringNullableWithAggregatesFilter' })
    t.field('theInt', { type: 'IntNullableWithAggregatesFilter' })
    t.field('theBoolean', { type: 'BoolNullableWithAggregatesFilter' })
    t.field('theFloat', { type: 'FloatNullableWithAggregatesFilter' })
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

export const FieldDemoCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('theBigInt', { type: 'BigInt' })
    t.field('theDateTime', { type: 'DateTime' })
    t.field('theBytes', { type: 'Bytes' })
    t.field('theDecimal', { type: 'Decimal' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'String' })
    t.field('theInt', { type: 'Int' })
    t.field('theBoolean', { type: 'Boolean' })
    t.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('theBigInt', { type: 'BigInt' })
    t.field('theDateTime', { type: 'DateTime' })
    t.field('theBytes', { type: 'Bytes' })
    t.field('theDecimal', { type: 'Decimal' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'String' })
    t.field('theInt', { type: 'Int' })
    t.field('theBoolean', { type: 'Boolean' })
    t.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('theBigInt', { type: 'NullableBigIntFieldUpdateOperationsInput' })
    t.field('theDateTime', {
      type: 'NullableDateTimeFieldUpdateOperationsInput'
    })
    t.field('theBytes', { type: 'NullableBytesFieldUpdateOperationsInput' })
    t.field('theDecimal', { type: 'NullableDecimalFieldUpdateOperationsInput' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('theInt', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('theBoolean', { type: 'NullableBoolFieldUpdateOperationsInput' })
    t.field('theFloat', { type: 'NullableFloatFieldUpdateOperationsInput' })
  }
})

export const FieldDemoUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('theBigInt', { type: 'NullableBigIntFieldUpdateOperationsInput' })
    t.field('theDateTime', {
      type: 'NullableDateTimeFieldUpdateOperationsInput'
    })
    t.field('theBytes', { type: 'NullableBytesFieldUpdateOperationsInput' })
    t.field('theDecimal', { type: 'NullableDecimalFieldUpdateOperationsInput' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('theInt', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('theBoolean', { type: 'NullableBoolFieldUpdateOperationsInput' })
    t.field('theFloat', { type: 'NullableFloatFieldUpdateOperationsInput' })
  }
})

export const FieldDemoCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('theBigInt', { type: 'BigInt' })
    t.field('theDateTime', { type: 'DateTime' })
    t.field('theBytes', { type: 'Bytes' })
    t.field('theDecimal', { type: 'Decimal' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'String' })
    t.field('theInt', { type: 'Int' })
    t.field('theBoolean', { type: 'Boolean' })
    t.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('theBigInt', { type: 'NullableBigIntFieldUpdateOperationsInput' })
    t.field('theDateTime', {
      type: 'NullableDateTimeFieldUpdateOperationsInput'
    })
    t.field('theBytes', { type: 'NullableBytesFieldUpdateOperationsInput' })
    t.field('theDecimal', { type: 'NullableDecimalFieldUpdateOperationsInput' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('theInt', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('theBoolean', { type: 'NullableBoolFieldUpdateOperationsInput' })
    t.field('theFloat', { type: 'NullableFloatFieldUpdateOperationsInput' })
  }
})

export const FieldDemoUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('theBigInt', { type: 'NullableBigIntFieldUpdateOperationsInput' })
    t.field('theDateTime', {
      type: 'NullableDateTimeFieldUpdateOperationsInput'
    })
    t.field('theBytes', { type: 'NullableBytesFieldUpdateOperationsInput' })
    t.field('theDecimal', { type: 'NullableDecimalFieldUpdateOperationsInput' })
    t.field('theJson', { type: 'Json' })
    t.field('theString', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('theInt', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('theBoolean', { type: 'NullableBoolFieldUpdateOperationsInput' })
    t.field('theFloat', { type: 'NullableFloatFieldUpdateOperationsInput' })
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

export const BigIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BigIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'BigInt' })
    t.list.field('in', { type: 'BigInt' })
    t.list.field('notIn', { type: 'BigInt' })
    t.field('lt', { type: 'BigInt' })
    t.field('lte', { type: 'BigInt' })
    t.field('gt', { type: 'BigInt' })
    t.field('gte', { type: 'BigInt' })
    t.field('not', { type: 'NestedBigIntNullableFilter' })
  }
})

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  }
})

export const BytesNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BytesNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Bytes' })
    t.list.field('in', { type: 'Bytes' })
    t.list.field('notIn', { type: 'Bytes' })
    t.field('not', { type: 'NestedBytesNullableFilter' })
  }
})

export const DecimalNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DecimalNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalNullableFilter' })
  }
})

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  }
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'StringNullableFilter',
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
    t.field('not', { type: 'NestedStringNullableFilter' })
  }
})

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  }
})

export const BoolNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BoolNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolNullableFilter' })
  }
})

export const FloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  }
})

export const FieldDemoCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDateTime', { type: 'SortOrder' })
    t.field('theBytes', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theJson', { type: 'SortOrder' })
    t.field('theString', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theBoolean', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const FieldDemoAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoAvgOrderByAggregateInput',
  definition(t) {
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const FieldDemoMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDateTime', { type: 'SortOrder' })
    t.field('theBytes', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theString', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theBoolean', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const FieldDemoMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDateTime', { type: 'SortOrder' })
    t.field('theBytes', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theString', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theBoolean', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const FieldDemoSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FieldDemoSumOrderByAggregateInput',
  definition(t) {
    t.field('theBigInt', { type: 'SortOrder' })
    t.field('theDecimal', { type: 'SortOrder' })
    t.field('theInt', { type: 'SortOrder' })
    t.field('theFloat', { type: 'SortOrder' })
  }
})

export const BigIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BigIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'BigInt' })
    t.list.field('in', { type: 'BigInt' })
    t.list.field('notIn', { type: 'BigInt' })
    t.field('lt', { type: 'BigInt' })
    t.field('lte', { type: 'BigInt' })
    t.field('gt', { type: 'BigInt' })
    t.field('gte', { type: 'BigInt' })
    t.field('not', { type: 'NestedBigIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedBigIntNullableFilter' })
    t.field('_min', { type: 'NestedBigIntNullableFilter' })
    t.field('_max', { type: 'NestedBigIntNullableFilter' })
  }
})

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  }
})

export const BytesNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BytesNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Bytes' })
    t.list.field('in', { type: 'Bytes' })
    t.list.field('notIn', { type: 'Bytes' })
    t.field('not', { type: 'NestedBytesNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedBytesNullableFilter' })
    t.field('_max', { type: 'NestedBytesNullableFilter' })
  }
})

export const DecimalNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'DecimalNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedDecimalNullableFilter' })
    t.field('_sum', { type: 'NestedDecimalNullableFilter' })
    t.field('_min', { type: 'NestedDecimalNullableFilter' })
    t.field('_max', { type: 'NestedDecimalNullableFilter' })
  }
})

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedJsonNullableFilter' })
    t.field('_max', { type: 'NestedJsonNullableFilter' })
  }
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'StringNullableWithAggregatesFilter',
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
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  }
})

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  }
})

export const BoolNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'BoolNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedBoolNullableFilter' })
    t.field('_max', { type: 'NestedBoolNullableFilter' })
  }
})

export const FloatNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'FloatNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedFloatNullableFilter' })
    t.field('_min', { type: 'NestedFloatNullableFilter' })
    t.field('_max', { type: 'NestedFloatNullableFilter' })
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

export const NullableBigIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableBigIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'BigInt' })
    t.field('increment', { type: 'BigInt' })
    t.field('decrement', { type: 'BigInt' })
    t.field('multiply', { type: 'BigInt' })
    t.field('divide', { type: 'BigInt' })
  }
})

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  }
})

export const NullableBytesFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableBytesFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Bytes' })
  }
})

export const NullableDecimalFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableDecimalFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Decimal' })
    t.field('increment', { type: 'Decimal' })
    t.field('decrement', { type: 'Decimal' })
    t.field('multiply', { type: 'Decimal' })
    t.field('divide', { type: 'Decimal' })
  }
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  }
})

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  }
})

export const NullableBoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableBoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  }
})

export const NullableFloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NullableFloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' })
    t.field('increment', { type: 'Float' })
    t.field('decrement', { type: 'Float' })
    t.field('multiply', { type: 'Float' })
    t.field('divide', { type: 'Float' })
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

export const NestedBigIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBigIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'BigInt' })
    t.list.field('in', { type: 'BigInt' })
    t.list.field('notIn', { type: 'BigInt' })
    t.field('lt', { type: 'BigInt' })
    t.field('lte', { type: 'BigInt' })
    t.field('gt', { type: 'BigInt' })
    t.field('gte', { type: 'BigInt' })
    t.field('not', { type: 'NestedBigIntNullableFilter' })
  }
})

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  }
})

export const NestedBytesNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBytesNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Bytes' })
    t.list.field('in', { type: 'Bytes' })
    t.list.field('notIn', { type: 'Bytes' })
    t.field('not', { type: 'NestedBytesNullableFilter' })
  }
})

export const NestedDecimalNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDecimalNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalNullableFilter' })
  }
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedStringNullableFilter',
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
    t.field('not', { type: 'NestedStringNullableFilter' })
  }
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  }
})

export const NestedBoolNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBoolNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolNullableFilter' })
  }
})

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  }
})

export const NestedBigIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBigIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'BigInt' })
    t.list.field('in', { type: 'BigInt' })
    t.list.field('notIn', { type: 'BigInt' })
    t.field('lt', { type: 'BigInt' })
    t.field('lte', { type: 'BigInt' })
    t.field('gt', { type: 'BigInt' })
    t.field('gte', { type: 'BigInt' })
    t.field('not', { type: 'NestedBigIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedBigIntNullableFilter' })
    t.field('_min', { type: 'NestedBigIntNullableFilter' })
    t.field('_max', { type: 'NestedBigIntNullableFilter' })
  }
})

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  }
})

export const NestedBytesNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBytesNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Bytes' })
    t.list.field('in', { type: 'Bytes' })
    t.list.field('notIn', { type: 'Bytes' })
    t.field('not', { type: 'NestedBytesNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedBytesNullableFilter' })
    t.field('_max', { type: 'NestedBytesNullableFilter' })
  }
})

export const NestedDecimalNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedDecimalNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedDecimalNullableFilter' })
    t.field('_sum', { type: 'NestedDecimalNullableFilter' })
    t.field('_min', { type: 'NestedDecimalNullableFilter' })
    t.field('_max', { type: 'NestedDecimalNullableFilter' })
  }
})

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_contains', { type: 'Json' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  }
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedStringNullableWithAggregatesFilter',
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
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  }
})

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  }
})

export const NestedBoolNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedBoolNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedBoolNullableFilter' })
    t.field('_max', { type: 'NestedBoolNullableFilter' })
  }
})

export const NestedFloatNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false
  },
  name: 'NestedFloatNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedFloatNullableFilter' })
    t.field('_min', { type: 'NestedFloatNullableFilter' })
    t.field('_max', { type: 'NestedFloatNullableFilter' })
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

export const AggregateFieldDemo = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'AggregateFieldDemo',
  definition(t) {
    t.nullable.field('_count', { type: 'FieldDemoCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'FieldDemoAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'FieldDemoSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'FieldDemoMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'FieldDemoMaxAggregateOutputType' })
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

export const FieldDemoCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'FieldDemoCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('theBigInt', { type: 'Int' })
    t.field('theDateTime', { type: 'Int' })
    t.field('theBytes', { type: 'Int' })
    t.field('theDecimal', { type: 'Int' })
    t.field('theJson', { type: 'Int' })
    t.field('theString', { type: 'Int' })
    t.field('theInt', { type: 'Int' })
    t.field('theBoolean', { type: 'Int' })
    t.field('theFloat', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  }
})

export const FieldDemoAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'FieldDemoAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('theBigInt', { type: 'Float' })
    t.nullable.field('theDecimal', { type: 'Decimal' })
    t.nullable.field('theInt', { type: 'Float' })
    t.nullable.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'FieldDemoSumAggregateOutputType',
  definition(t) {
    t.nullable.field('theBigInt', { type: 'BigInt' })
    t.nullable.field('theDecimal', { type: 'Decimal' })
    t.nullable.field('theInt', { type: 'Int' })
    t.nullable.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'FieldDemoMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('theBigInt', { type: 'BigInt' })
    t.nullable.field('theDateTime', { type: 'DateTime' })
    t.nullable.field('theBytes', { type: 'Bytes' })
    t.nullable.field('theDecimal', { type: 'Decimal' })
    t.nullable.field('theString', { type: 'String' })
    t.nullable.field('theInt', { type: 'Int' })
    t.nullable.field('theBoolean', { type: 'Boolean' })
    t.nullable.field('theFloat', { type: 'Float' })
  }
})

export const FieldDemoMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true
  },
  name: 'FieldDemoMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('theBigInt', { type: 'BigInt' })
    t.nullable.field('theDateTime', { type: 'DateTime' })
    t.nullable.field('theBytes', { type: 'Bytes' })
    t.nullable.field('theDecimal', { type: 'Decimal' })
    t.nullable.field('theString', { type: 'String' })
    t.nullable.field('theInt', { type: 'Int' })
    t.nullable.field('theBoolean', { type: 'Boolean' })
    t.nullable.field('theFloat', { type: 'Float' })
  }
})
