import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    accountNumber = "accountNumber",
    name = "name",
    balance = "balance",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    accountCategory = "accountCategory"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
