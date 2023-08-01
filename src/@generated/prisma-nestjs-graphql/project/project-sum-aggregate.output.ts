import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProjectSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    returnRate?: number;

    @Field(() => Int, {nullable:true})
    goalAmount?: number;

    @Field(() => Float, {nullable:true})
    currentAmount?: number;

    @Field(() => Int, {nullable:true})
    minimumInvestment?: number;

    @Field(() => Int, {nullable:true})
    maxInvestor?: number;

    @Field(() => Int, {nullable:true})
    accountId?: number;
}
