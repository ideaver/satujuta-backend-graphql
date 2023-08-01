import { registerEnumType } from '@nestjs/graphql';

export enum AccountCategory {
    EQUITY = "EQUITY",
    PROJECT = "PROJECT",
    COMISSION = "COMISSION",
    CASH = "CASH",
    PLATFORM = "PLATFORM",
    BANK = "BANK"
}


registerEnumType(AccountCategory, { name: 'AccountCategory', description: undefined })
