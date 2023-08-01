import { registerEnumType } from '@nestjs/graphql';

export enum HotelScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    description = "description",
    rating = "rating",
    startDate = "startDate",
    quota = "quota",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HotelScalarFieldEnum, { name: 'HotelScalarFieldEnum', description: undefined })
