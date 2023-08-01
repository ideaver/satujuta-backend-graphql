import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutShippingInput } from './address-update-without-shipping.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutShippingInput } from './address-create-without-shipping.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutShippingInput {

    @Field(() => AddressUpdateWithoutShippingInput, {nullable:false})
    @Type(() => AddressUpdateWithoutShippingInput)
    update!: AddressUpdateWithoutShippingInput;

    @Field(() => AddressCreateWithoutShippingInput, {nullable:false})
    @Type(() => AddressCreateWithoutShippingInput)
    create!: AddressCreateWithoutShippingInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
