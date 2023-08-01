import { registerEnumType } from '@nestjs/graphql';

export enum CityScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
