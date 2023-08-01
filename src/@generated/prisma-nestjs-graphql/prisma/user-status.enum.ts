import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    INACTIVE = "INACTIVE"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
