import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutShippingInput } from './address-update-without-shipping.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutShippingInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutShippingInput, {nullable:false})
    @Type(() => AddressUpdateWithoutShippingInput)
    data!: AddressUpdateWithoutShippingInput;
}
