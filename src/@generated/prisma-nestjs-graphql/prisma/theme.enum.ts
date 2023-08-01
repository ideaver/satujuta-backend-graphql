import { registerEnumType } from '@nestjs/graphql';

export enum Theme {
    LIGHT = "LIGHT",
    DARK = "DARK"
}


registerEnumType(Theme, { name: 'Theme', description: undefined })
