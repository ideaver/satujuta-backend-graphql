import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostalCodeCreateWithoutAddressInput } from './postal-code-create-without-address.input';
import { Type } from 'class-transformer';
import { PostalCodeCreateOrConnectWithoutAddressInput } from './postal-code-create-or-connect-without-address.input';
import { PostalCodeUpsertWithoutAddressInput } from './postal-code-upsert-without-address.input';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { PostalCodeUpdateToOneWithWhereWithoutAddressInput } from './postal-code-update-to-one-with-where-without-address.input';

@InputType()
export class PostalCodeUpdateOneRequiredWithoutAddressNestedInput {

    @Field(() => PostalCodeCreateWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeCreateWithoutAddressInput)
    create?: PostalCodeCreateWithoutAddressInput;

    @Field(() => PostalCodeCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeCreateOrConnectWithoutAddressInput)
    connectOrCreate?: PostalCodeCreateOrConnectWithoutAddressInput;

    @Field(() => PostalCodeUpsertWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeUpsertWithoutAddressInput)
    upsert?: PostalCodeUpsertWithoutAddressInput;

    @Field(() => PostalCodeWhereUniqueInput, {nullable:true})
    @Type(() => PostalCodeWhereUniqueInput)
    connect?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;

    @Field(() => PostalCodeUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => PostalCodeUpdateToOneWithWhereWithoutAddressInput)
    update?: PostalCodeUpdateToOneWithWhereWithoutAddressInput;
}
