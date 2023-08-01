import { registerEnumType } from '@nestjs/graphql';

export enum ShippingScalarFieldEnum {
    id = "id",
    logisticName = "logisticName",
    deliveryDate = "deliveryDate",
    shippingStatus = "shippingStatus",
    addressId = "addressId",
    courier = "courier",
    estimatedTime = "estimatedTime",
    trackingNo = "trackingNo",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ShippingScalarFieldEnum, { name: 'ShippingScalarFieldEnum', description: undefined })
