import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserNotificationCategory } from '../prisma/user-notification-category.enum';

@ObjectType()
export class UserNotificationMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserNotificationCategory, {nullable:true})
    category?: keyof typeof UserNotificationCategory;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => Boolean, {nullable:true})
    isCleared?: boolean;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    deepLink?: string;

    @Field(() => String, {nullable:true})
    fcmToken?: string;
}
