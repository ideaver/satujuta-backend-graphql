import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingUpdateInput } from './shipping-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@ArgsType()
export class UpdateOneShippingArgs {

    @Field(() => ShippingUpdateInput, {nullable:false})
    @Type(() => ShippingUpdateInput)
    data!: ShippingUpdateInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;
}
