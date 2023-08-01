import { registerEnumType } from '@nestjs/graphql';

export enum DistrictScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(DistrictScalarFieldEnum, { name: 'DistrictScalarFieldEnum', description: undefined })
