import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutTransactionsInput } from './account-update-without-transactions.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTransactionsInput)
    data!: AccountUpdateWithoutTransactionsInput;
}
