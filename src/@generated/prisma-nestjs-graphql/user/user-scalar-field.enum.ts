import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    addressId = "addressId",
    userRole = "userRole",
    userType = "userType",
    avatarUrl = "avatarUrl",
    whatsappNumber = "whatsappNumber",
    whatsappVerifiedAt = "whatsappVerifiedAt",
    password = "password",
    referredById = "referredById",
    status = "status",
    schoolId = "schoolId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    theme = "theme"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
