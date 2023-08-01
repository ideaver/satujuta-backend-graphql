import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    token = "token",
    expiresAt = "expiresAt",
    createdAt = "createdAt",
    userId = "userId",
    device = "device",
    ipAddress = "ipAddress"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
