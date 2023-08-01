import { registerEnumType } from '@nestjs/graphql';

export enum PaymentConfirmationScalarFieldEnum {
    id = "id",
    ProofUrl = "ProofUrl",
    paymentId = "paymentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PaymentConfirmationScalarFieldEnum, { name: 'PaymentConfirmationScalarFieldEnum', description: undefined })
