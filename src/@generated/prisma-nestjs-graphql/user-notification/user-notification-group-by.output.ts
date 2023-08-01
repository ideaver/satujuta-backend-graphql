import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserNotificationCategory } from '../prisma/user-notification-category.enum';
import { UserNotificationCountAggregate } from './user-notification-count-aggregate.output';
import { UserNotificationAvgAggregate } from './user-notification-avg-aggregate.output';
import { UserNotificationSumAggregate } from './user-notification-sum-aggregate.output';
import { UserNotificationMinAggregate } from './user-notification-min-aggregate.output';
import { UserNotificationMaxAggregate } from './user-notification-max-aggregate.output';

@ObjectType()
export class UserNotificationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    subtitle!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => UserNotificationCategory, {nullable:false})
    category!: keyof typeof UserNotificationCategory;

    @Field(() => Boolean, {nullable:false})
    isRead!: boolean;

    @Field(() => Boolean, {nullable:false})
    isCleared!: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    deepLink?: string;

    @Field(() => String, {nullable:true})
    fcmToken?: string;

    @Field(() => UserNotificationCountAggregate, {nullable:true})
    _count?: UserNotificationCountAggregate;

    @Field(() => UserNotificationAvgAggregate, {nullable:true})
    _avg?: UserNotificationAvgAggregate;

    @Field(() => UserNotificationSumAggregate, {nullable:true})
    _sum?: UserNotificationSumAggregate;

    @Field(() => UserNotificationMinAggregate, {nullable:true})
    _min?: UserNotificationMinAggregate;

    @Field(() => UserNotificationMaxAggregate, {nullable:true})
    _max?: UserNotificationMaxAggregate;
}
