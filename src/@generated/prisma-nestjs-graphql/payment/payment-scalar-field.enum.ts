import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    adminFee = "adminFee",
    totalPayment = "totalPayment",
    orderId = "orderId",
    transactionId = "transactionId",
    createdAt = "createdAt"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
