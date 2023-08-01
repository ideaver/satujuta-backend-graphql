import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Images } from '../images/images.model';
import { User } from '../user/user.model';
import { RewardCount } from './reward-count.output';

@ObjectType()
export class Reward {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    pointCost!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Images], {nullable:true})
    images?: Array<Images>;

    @Field(() => [User], {nullable:true})
    claimers?: Array<User>;

    @Field(() => RewardCount, {nullable:false})
    _count?: RewardCount;
}
