import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProjectAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    returnRate?: number;

    @Field(() => Float, {nullable:true})
    goalAmount?: number;

    @Field(() => Float, {nullable:true})
    currentAmount?: number;

    @Field(() => Float, {nullable:true})
    minimumInvestment?: number;

    @Field(() => Float, {nullable:true})
    maxInvestor?: number;

    @Field(() => Float, {nullable:true})
    accountId?: number;
}
