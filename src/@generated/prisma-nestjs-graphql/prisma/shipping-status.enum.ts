import { registerEnumType } from '@nestjs/graphql';

export enum ShippingStatus {
    PROCESSING = "PROCESSING",
    DELIVERING = "DELIVERING",
    DELIVERED = "DELIVERED"
}


registerEnumType(ShippingStatus, { name: 'ShippingStatus', description: undefined })
