import { registerEnumType } from '@nestjs/graphql';

export enum UserType {
    PARENT = "PARENT",
    SCHOOL_HEAD = "SCHOOL_HEAD",
    STUDENT = "STUDENT"
}


registerEnumType(UserType, { name: 'UserType', description: undefined })
