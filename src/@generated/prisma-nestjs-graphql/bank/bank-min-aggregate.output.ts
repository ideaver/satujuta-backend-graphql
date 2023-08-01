import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BankMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => Int, {nullable:true})
    accountNumber?: number;

    @Field(() => Int, {nullable:true})
    accountId?: number;
}
