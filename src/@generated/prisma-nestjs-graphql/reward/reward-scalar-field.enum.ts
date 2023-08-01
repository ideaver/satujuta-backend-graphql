import { registerEnumType } from '@nestjs/graphql';

export enum RewardScalarFieldEnum {
    id = "id",
    name = "name",
    pointCost = "pointCost",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RewardScalarFieldEnum, { name: 'RewardScalarFieldEnum', description: undefined })
