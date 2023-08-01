import { registerEnumType } from '@nestjs/graphql';

export enum ProgramScalarFieldEnum {
    id = "id",
    name = "name",
    startDate = "startDate",
    dueDate = "dueDate",
    description = "description",
    createdById = "createdById",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProgramScalarFieldEnum, { name: 'ProgramScalarFieldEnum', description: undefined })
