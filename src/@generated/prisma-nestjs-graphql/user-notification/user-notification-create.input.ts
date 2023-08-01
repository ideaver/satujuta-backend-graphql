import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserNotificationCategory } from '../prisma/user-notification-category.enum';
import { UserCreateNestedOneWithoutUserNotificationsInput } from '../user/user-create-nested-one-without-user-notifications.input';

@InputType()
export class UserNotificationCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    title!: string;

    @Field(() => String, {nullable:false})
    subtitle!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserNotificationCategory, {nullable:false})
    category!: keyof typeof UserNotificationCategory;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => Boolean, {nullable:true})
    isCleared?: boolean;

    @Field(() => String, {nullable:true})
    deepLink?: string;

    @Field(() => String, {nullable:true})
    fcmToken?: string;

    @Field(() => UserCreateNestedOneWithoutUserNotificationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserNotificationsInput;
}
