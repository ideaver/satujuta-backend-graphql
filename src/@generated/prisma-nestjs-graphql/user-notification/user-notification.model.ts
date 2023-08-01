import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserNotificationCategory } from '../prisma/user-notification-category.enum';
import { User } from '../user/user.model';

@ObjectType()
export class UserNotification {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    subtitle!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => UserNotificationCategory, {nullable:false})
    category!: keyof typeof UserNotificationCategory;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isRead!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isCleared!: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    deepLink!: string | null;

    @Field(() => String, {nullable:true})
    fcmToken!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
