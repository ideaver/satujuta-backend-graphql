import { registerEnumType } from '@nestjs/graphql';

export enum SchoolScalarFieldEnum {
    id = "id",
    name = "name",
    addressId = "addressId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SchoolScalarFieldEnum, { name: 'SchoolScalarFieldEnum', description: undefined })
