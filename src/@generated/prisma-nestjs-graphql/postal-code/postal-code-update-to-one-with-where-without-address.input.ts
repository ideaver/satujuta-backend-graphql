import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostalCodeWhereInput } from './postal-code-where.input';
import { Type } from 'class-transformer';
import { PostalCodeUpdateWithoutAddressInput } from './postal-code-update-without-address.input';

@InputType()
export class PostalCodeUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;

    @Field(() => PostalCodeUpdateWithoutAddressInput, {nullable:false})
    @Type(() => PostalCodeUpdateWithoutAddressInput)
    data!: PostalCodeUpdateWithoutAddressInput;
}
