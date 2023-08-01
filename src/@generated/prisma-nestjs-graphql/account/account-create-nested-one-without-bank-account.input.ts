import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutBankAccountInput } from './account-create-without-bank-account.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutBankAccountInput } from './account-create-or-connect-without-bank-account.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutBankAccountInput {

    @Field(() => AccountCreateWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountCreateWithoutBankAccountInput)
    create?: AccountCreateWithoutBankAccountInput;

    @Field(() => AccountCreateOrConnectWithoutBankAccountInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutBankAccountInput)
    connectOrCreate?: AccountCreateOrConnectWithoutBankAccountInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
