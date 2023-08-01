import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SessionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    token!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    device!: number;

    @Field(() => Int, {nullable:false})
    ipAddress!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
