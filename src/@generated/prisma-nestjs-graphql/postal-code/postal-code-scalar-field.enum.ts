import { registerEnumType } from '@nestjs/graphql';

export enum PostalCodeScalarFieldEnum {
    id = "id",
    code = "code"
}


registerEnumType(PostalCodeScalarFieldEnum, { name: 'PostalCodeScalarFieldEnum', description: undefined })
