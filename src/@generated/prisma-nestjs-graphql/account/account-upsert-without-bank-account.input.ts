import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutBankAccountInput } from './account-update-without-bank-account.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutBankAccountInput } from './account-create-without-bank-account.input';
import { AccountWhereInput } from './account-where.input';

@InputType()
export class AccountUpsertWithoutBankAccountInput {

    @Field(() => AccountUpdateWithoutBankAccountInput, {nullable:false})
    @Type(() => AccountUpdateWithoutBankAccountInput)
    update!: AccountUpdateWithoutBankAccountInput;

    @Field(() => AccountCreateWithoutBankAccountInput, {nullable:false})
    @Type(() => AccountCreateWithoutBankAccountInput)
    create!: AccountCreateWithoutBankAccountInput;

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;
}
