import { registerEnumType } from '@nestjs/graphql';

export enum UserNotificationScalarFieldEnum {
    id = "id",
    title = "title",
    subtitle = "subtitle",
    content = "content",
    createdAt = "createdAt",
    category = "category",
    isRead = "isRead",
    isCleared = "isCleared",
    userId = "userId",
    deepLink = "deepLink",
    fcmToken = "fcmToken"
}


registerEnumType(UserNotificationScalarFieldEnum, { name: 'UserNotificationScalarFieldEnum', description: undefined })
