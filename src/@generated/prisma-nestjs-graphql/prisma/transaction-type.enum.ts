import { registerEnumType } from '@nestjs/graphql';

export enum TransactionType {
    DEBIT = "DEBIT",
    CREDIT = "CREDIT"
}


registerEnumType(TransactionType, { name: 'TransactionType', description: undefined })
