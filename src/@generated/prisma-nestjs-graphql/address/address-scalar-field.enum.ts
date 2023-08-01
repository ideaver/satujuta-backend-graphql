import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId",
    districtId = "districtId",
    postalCodeId = "postalCodeId"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
