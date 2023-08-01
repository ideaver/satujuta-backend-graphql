import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutBankAccountInput } from './account-create-without-bank-account.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutBankAccountInput } from './account-create-or-connect-without-bank-account.input';
import { AccountUpsertWithoutBankAccountInput } from './account-upsert-without-bank-account.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutBankAccountInput } from './account-update-to-one-with-where-without-bank-account.input';

@InputType()
export class AccountUpdateOneRequiredWithoutBankAccountNestedInput {

    @Field(() => AccountCreateWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountCreateWithoutBankAccountInput)
    create?: AccountCreateWithoutBankAccountInput;

    @Field(() => AccountCreateOrConnectWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutBankAccountInput)
    connectOrCreate?: AccountCreateOrConnectWithoutBankAccountInput;

    @Field(() => AccountUpsertWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountUpsertWithoutBankAccountInput)
    upsert?: AccountUpsertWithoutBankAccountInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutBankAccountInput)
    update?: AccountUpdateToOneWithWhereWithoutBankAccountInput;
}
