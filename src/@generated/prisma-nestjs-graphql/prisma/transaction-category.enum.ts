import { registerEnumType } from '@nestjs/graphql';

export enum TransactionCategory {
    INVESTMENT = "INVESTMENT",
    INVESTMENT_RETURN = "INVESTMENT_RETURN",
    COMISSION_BONUS = "COMISSION_BONUS",
    WITHDRAWAL = "WITHDRAWAL",
    MEMBER_REGISTRATION = "MEMBER_REGISTRATION",
    STUDENT_REGISTRATION = "STUDENT_REGISTRATION"
}


registerEnumType(TransactionCategory, { name: 'TransactionCategory', description: undefined })
