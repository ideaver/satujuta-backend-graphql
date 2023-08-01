import { registerEnumType } from '@nestjs/graphql';

export enum CheckInScalarFieldEnum {
    id = "id",
    userId = "userId",
    hotelId = "hotelId",
    checkInAt = "checkInAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CheckInScalarFieldEnum, { name: 'CheckInScalarFieldEnum', description: undefined })
