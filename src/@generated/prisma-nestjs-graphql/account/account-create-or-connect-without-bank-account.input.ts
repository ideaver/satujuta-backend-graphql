import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutBankAccountInput } from './account-create-without-bank-account.input';

@InputType()
export class AccountCreateOrConnectWithoutBankAccountInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutBankAccountInput, {nullable:false})
    @Type(() => AccountCreateWithoutBankAccountInput)
    create!: AccountCreateWithoutBankAccountInput;
}
