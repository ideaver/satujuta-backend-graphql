import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCategory } from './user-notification-category.enum';
import { NestedEnumUserNotificationCategoryFilter } from './nested-enum-user-notification-category-filter.input';

@InputType()
export class EnumUserNotificationCategoryFilter {

    @Field(() => UserNotificationCategory, {nullable:true})
    equals?: keyof typeof UserNotificationCategory;

    @Field(() => [UserNotificationCategory], {nullable:true})
    in?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => [UserNotificationCategory], {nullable:true})
    notIn?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => NestedEnumUserNotificationCategoryFilter, {nullable:true})
    not?: NestedEnumUserNotificationCategoryFilter;
}
