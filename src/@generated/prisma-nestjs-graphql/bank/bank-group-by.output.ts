import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BankCountAggregate } from './bank-count-aggregate.output';
import { BankAvgAggregate } from './bank-avg-aggregate.output';
import { BankSumAggregate } from './bank-sum-aggregate.output';
import { BankMinAggregate } from './bank-min-aggregate.output';
import { BankMaxAggregate } from './bank-max-aggregate.output';

@ObjectType()
export class BankGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    logoUrl!: string;

    @Field(() => Int, {nullable:false})
    accountNumber!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => BankCountAggregate, {nullable:true})
    _count?: BankCountAggregate;

    @Field(() => BankAvgAggregate, {nullable:true})
    _avg?: BankAvgAggregate;

    @Field(() => BankSumAggregate, {nullable:true})
    _sum?: BankSumAggregate;

    @Field(() => BankMinAggregate, {nullable:true})
    _min?: BankMinAggregate;

    @Field(() => BankMaxAggregate, {nullable:true})
    _max?: BankMaxAggregate;
}
