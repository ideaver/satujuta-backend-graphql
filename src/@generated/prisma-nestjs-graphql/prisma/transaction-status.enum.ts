import { registerEnumType } from '@nestjs/graphql';

export enum TransactionStatus {
    PROCESSING = "PROCESSING",
    PENDING = "PENDING",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}


registerEnumType(TransactionStatus, { name: 'TransactionStatus', description: undefined })
