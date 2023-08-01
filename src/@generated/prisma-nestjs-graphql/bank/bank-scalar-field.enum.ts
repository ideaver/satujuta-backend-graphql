import { registerEnumType } from '@nestjs/graphql';

export enum BankScalarFieldEnum {
    id = "id",
    name = "name",
    logoUrl = "logoUrl",
    accountNumber = "accountNumber",
    accountId = "accountId"
}


registerEnumType(BankScalarFieldEnum, { name: 'BankScalarFieldEnum', description: undefined })
