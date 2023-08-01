import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    orderById!: number;

    @Field(() => Int, {nullable:false})
    shippingId!: number;

    @Field(() => Int, {nullable:false})
    isFullPaid!: number;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:false})
    platformFee!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
