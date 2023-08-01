import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostalCodeUpdateWithoutAddressInput } from './postal-code-update-without-address.input';
import { Type } from 'class-transformer';
import { PostalCodeCreateWithoutAddressInput } from './postal-code-create-without-address.input';
import { PostalCodeWhereInput } from './postal-code-where.input';

@InputType()
export class PostalCodeUpsertWithoutAddressInput {

    @Field(() => PostalCodeUpdateWithoutAddressInput, {nullable:false})
    @Type(() => PostalCodeUpdateWithoutAddressInput)
    update!: PostalCodeUpdateWithoutAddressInput;

    @Field(() => PostalCodeCreateWithoutAddressInput, {nullable:false})
    @Type(() => PostalCodeCreateWithoutAddressInput)
    create!: PostalCodeCreateWithoutAddressInput;

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;
}
