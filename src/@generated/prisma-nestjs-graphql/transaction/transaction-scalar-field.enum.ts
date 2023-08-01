import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    status = "status",
    transactionType = "transactionType",
    transactionCategory = "transactionCategory",
    currentBalance = "currentBalance",
    userId = "userId",
    accountId = "accountId",
    createdAt = "createdAt"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
