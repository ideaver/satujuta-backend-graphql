import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    referredUsers?: number;

    @Field(() => Int, {nullable:false})
    checkIns?: number;

    @Field(() => Int, {nullable:false})
    accounts?: number;

    @Field(() => Int, {nullable:false})
    transactions?: number;

    @Field(() => Int, {nullable:false})
    PointTransactions?: number;

    @Field(() => Int, {nullable:false})
    orders?: number;

    @Field(() => Int, {nullable:false})
    sessions?: number;

    @Field(() => Int, {nullable:false})
    hotelsCreated?: number;

    @Field(() => Int, {nullable:false})
    programsParticipation?: number;

    @Field(() => Int, {nullable:false})
    projectsInvestment?: number;

    @Field(() => Int, {nullable:false})
    claimedRewards?: number;

    @Field(() => Int, {nullable:false})
    userNotifications?: number;

    @Field(() => Int, {nullable:false})
    programsCreated?: number;

    @Field(() => Int, {nullable:false})
    filesCreated?: number;
}
