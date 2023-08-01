import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumUserNotificationCategoryWithAggregatesFilter } from '../prisma/enum-user-notification-category-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class UserNotificationScalarWhereWithAggregatesInput {

    @Field(() => [UserNotificationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserNotificationScalarWhereWithAggregatesInput>;

    @Field(() => [UserNotificationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserNotificationScalarWhereWithAggregatesInput>;

    @Field(() => [UserNotificationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserNotificationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subtitle?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumUserNotificationCategoryWithAggregatesFilter, {nullable:true})
    category?: EnumUserNotificationCategoryWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isRead?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isCleared?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deepLink?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fcmToken?: StringNullableWithAggregatesFilter;
}
