import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumUserNotificationCategoryFilter } from '../prisma/enum-user-notification-category-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserNotificationWhereInput {

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    AND?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    OR?: Array<UserNotificationWhereInput>;

    @Field(() => [UserNotificationWhereInput], {nullable:true})
    NOT?: Array<UserNotificationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subtitle?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumUserNotificationCategoryFilter, {nullable:true})
    category?: EnumUserNotificationCategoryFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRead?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isCleared?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deepLink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fcmToken?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
