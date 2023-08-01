import { registerEnumType } from '@nestjs/graphql';

export enum PointType {
    REFERRING = "REFERRING",
    REDEEMING = "REDEEMING"
}


registerEnumType(PointType, { name: 'PointType', description: undefined })
