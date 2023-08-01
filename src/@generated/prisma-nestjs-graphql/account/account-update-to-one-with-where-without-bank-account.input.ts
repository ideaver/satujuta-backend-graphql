import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutBankAccountInput } from './account-update-without-bank-account.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutBankAccountInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutBankAccountInput, {nullable:false})
    @Type(() => AccountUpdateWithoutBankAccountInput)
    data!: AccountUpdateWithoutBankAccountInput;
}
