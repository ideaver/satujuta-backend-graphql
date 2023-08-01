import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ShippingStatus } from '../prisma/shipping-status.enum';
import { AddressCreateNestedOneWithoutShippingInput } from '../address/address-create-nested-one-without-shipping.input';

@InputType()
export class ShippingCreateWithoutOrderInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlphanumeric()
    logisticName!: string;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => ShippingStatus, {nullable:false})
    shippingStatus!: keyof typeof ShippingStatus;

    @Field(() => String, {nullable:true})
    courier?: string;

    @Field(() => String, {nullable:true})
    estimatedTime?: string;

    @Field(() => String, {nullable:true})
    trackingNo?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AddressCreateNestedOneWithoutShippingInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutShippingInput;
}
