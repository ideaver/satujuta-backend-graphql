import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { Type } from 'class-transformer';
import { ShippingOrderByWithRelationInput } from './shipping-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingScalarFieldEnum } from './shipping-scalar-field.enum';

@ArgsType()
export class FindFirstShippingOrThrowArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;

    @Field(() => [ShippingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingOrderByWithRelationInput>;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShippingWhereUniqueInput, 'id' | 'addressId' | 'orderId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
