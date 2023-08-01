import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BankCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    logoUrl!: number;

    @Field(() => Int, {nullable:false})
    accountNumber!: number;

    @Field(() => Int, {nullable:false})
    accountId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
