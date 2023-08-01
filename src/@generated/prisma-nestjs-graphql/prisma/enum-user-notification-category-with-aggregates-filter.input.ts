import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCategory } from './user-notification-category.enum';
import { NestedEnumUserNotificationCategoryWithAggregatesFilter } from './nested-enum-user-notification-category-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserNotificationCategoryFilter } from './nested-enum-user-notification-category-filter.input';

@InputType()
export class EnumUserNotificationCategoryWithAggregatesFilter {

    @Field(() => UserNotificationCategory, {nullable:true})
    equals?: keyof typeof UserNotificationCategory;

    @Field(() => [UserNotificationCategory], {nullable:true})
    in?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => [UserNotificationCategory], {nullable:true})
    notIn?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => NestedEnumUserNotificationCategoryWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserNotificationCategoryWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserNotificationCategoryFilter, {nullable:true})
    _min?: NestedEnumUserNotificationCategoryFilter;

    @Field(() => NestedEnumUserNotificationCategoryFilter, {nullable:true})
    _max?: NestedEnumUserNotificationCategoryFilter;
}
