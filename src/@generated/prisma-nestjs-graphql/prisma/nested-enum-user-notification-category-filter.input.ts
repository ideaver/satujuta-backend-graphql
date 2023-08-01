import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCategory } from './user-notification-category.enum';

@InputType()
export class NestedEnumUserNotificationCategoryFilter {

    @Field(() => UserNotificationCategory, {nullable:true})
    equals?: keyof typeof UserNotificationCategory;

    @Field(() => [UserNotificationCategory], {nullable:true})
    in?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => [UserNotificationCategory], {nullable:true})
    notIn?: Array<keyof typeof UserNotificationCategory>;

    @Field(() => NestedEnumUserNotificationCategoryFilter, {nullable:true})
    not?: NestedEnumUserNotificationCategoryFilter;
}
