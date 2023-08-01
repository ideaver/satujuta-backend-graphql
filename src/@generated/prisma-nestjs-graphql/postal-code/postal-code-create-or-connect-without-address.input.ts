import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { Type } from 'class-transformer';
import { PostalCodeCreateWithoutAddressInput } from './postal-code-create-without-address.input';

@InputType()
export class PostalCodeCreateOrConnectWithoutAddressInput {

    @Field(() => PostalCodeWhereUniqueInput, {nullable:false})
    @Type(() => PostalCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;

    @Field(() => PostalCodeCreateWithoutAddressInput, {nullable:false})
    @Type(() => PostalCodeCreateWithoutAddressInput)
    create!: PostalCodeCreateWithoutAddressInput;
}
