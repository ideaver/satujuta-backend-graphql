import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    status = "status",
    orderById = "orderById",
    shippingId = "shippingId",
    isFullPaid = "isFullPaid",
    cost = "cost",
    platformFee = "platformFee",
    total = "total",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
