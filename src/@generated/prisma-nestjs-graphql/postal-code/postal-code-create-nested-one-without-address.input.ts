import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostalCodeCreateWithoutAddressInput } from './postal-code-create-without-address.input';
import { Type } from 'class-transformer';
import { PostalCodeCreateOrConnectWithoutAddressInput } from './postal-code-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';

@InputType()
export class PostalCodeCreateNestedOneWithoutAddressInput {

    @Field(() => PostalCodeCreateWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeCreateWithoutAddressInput)
    create?: PostalCodeCreateWithoutAddressInput;

    @Field(() => PostalCodeCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeCreateOrConnectWithoutAddressInput)
    connectOrCreate?: PostalCodeCreateOrConnectWithoutAddressInput;

    @Field(() => PostalCodeWhereUniqueInput, {nullable:true})
    @Type(() => PostalCodeWhereUniqueInput)
    connect?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;
}
