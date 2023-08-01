import { registerEnumType } from '@nestjs/graphql';

export enum UserNotificationCategory {
    BILLING_ALERT = "BILLING_ALERT",
    ANNOUNCEMENT = "ANNOUNCEMENT",
    CHAT_MESSAGE = "CHAT_MESSAGE"
}


registerEnumType(UserNotificationCategory, { name: 'UserNotificationCategory', description: undefined })
