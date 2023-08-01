import { registerEnumType } from '@nestjs/graphql';

export enum PointTransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    pointType = "pointType",
    transactionType = "transactionType",
    currentBalance = "currentBalance",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(PointTransactionScalarFieldEnum, { name: 'PointTransactionScalarFieldEnum', description: undefined })
