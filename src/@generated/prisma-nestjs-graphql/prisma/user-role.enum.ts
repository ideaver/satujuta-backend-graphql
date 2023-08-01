import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    SUPERUSER = "SUPERUSER",
    STUDENT = "STUDENT"
}


registerEnumType(UserRole, { name: 'UserRole', description: undefined })
