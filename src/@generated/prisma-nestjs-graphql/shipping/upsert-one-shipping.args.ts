import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Type } from 'class-transformer';
import { ShippingCreateInput } from './shipping-create.input';
import { ShippingUpdateInput } from './shipping-update.input';

@ArgsType()
export class UpsertOneShippingArgs {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => ShippingCreateInput, {nullable:false})
    @Type(() => ShippingCreateInput)
    create!: ShippingCreateInput;

    @Field(() => ShippingUpdateInput, {nullable:false})
    @Type(() => ShippingUpdateInput)
    update!: ShippingUpdateInput;
}
