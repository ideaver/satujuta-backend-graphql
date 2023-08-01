import { registerEnumType } from '@nestjs/graphql';

export enum FaqScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FaqScalarFieldEnum, { name: 'FaqScalarFieldEnum', description: undefined })
