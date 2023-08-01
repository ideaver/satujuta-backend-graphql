import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    projectCategory = "projectCategory",
    startDate = "startDate",
    endDate = "endDate",
    returnRate = "returnRate",
    goalAmount = "goalAmount",
    currentAmount = "currentAmount",
    minimumInvestment = "minimumInvestment",
    maxInvestor = "maxInvestor",
    accountId = "accountId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
