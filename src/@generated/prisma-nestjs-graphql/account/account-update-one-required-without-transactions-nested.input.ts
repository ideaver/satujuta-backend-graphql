import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTransactionsInput } from './account-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTransactionsInput } from './account-create-or-connect-without-transactions.input';
import { AccountUpsertWithoutTransactionsInput } from './account-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutTransactionsInput } from './account-update-to-one-with-where-without-transactions.input';

@InputType()
export class AccountUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => AccountCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateWithoutTransactionsInput)
    create?: AccountCreateWithoutTransactionsInput;

    @Field(() => AccountCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput;

    @Field(() => AccountUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutTransactionsInput)
    upsert?: AccountUpsertWithoutTransactionsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutTransactionsInput)
    update?: AccountUpdateToOneWithWhereWithoutTransactionsInput;
}
