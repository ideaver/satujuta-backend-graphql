import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RewardCount {

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    claimers?: number;
}
