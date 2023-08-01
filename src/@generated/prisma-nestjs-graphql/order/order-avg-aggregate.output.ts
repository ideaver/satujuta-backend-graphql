import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    shippingId?: number;

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Float, {nullable:true})
    platformFee?: number;

    @Field(() => Float, {nullable:true})
    total?: number;
}
