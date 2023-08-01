import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    qty = "qty",
    userRole = "userRole",
    orderId = "orderId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
