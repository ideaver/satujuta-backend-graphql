import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserNotificationCategory } from './user-notification-category.enum';

@InputType()
export class EnumUserNotificationCategoryFieldUpdateOperationsInput {

    @Field(() => UserNotificationCategory, {nullable:true})
    set?: keyof typeof UserNotificationCategory;
}
