import { registerEnumType } from '@nestjs/graphql';

export enum ProgramCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProgramCategoryScalarFieldEnum, { name: 'ProgramCategoryScalarFieldEnum', description: undefined })
