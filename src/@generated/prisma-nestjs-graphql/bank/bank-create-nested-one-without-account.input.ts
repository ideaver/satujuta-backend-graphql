import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankCreateWithoutAccountInput } from './bank-create-without-account.input';
import { Type } from 'class-transformer';
import { BankCreateOrConnectWithoutAccountInput } from './bank-create-or-connect-without-account.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';

@InputType()
export class BankCreateNestedOneWithoutAccountInput {

    @Field(() => BankCreateWithoutAccountInput, {nullable:true})
    @Type(() => BankCreateWithoutAccountInput)
    create?: BankCreateWithoutAccountInput;

    @Field(() => BankCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => BankCreateOrConnectWithoutAccountInput)
    connectOrCreate?: BankCreateOrConnectWithoutAccountInput;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    @Type(() => BankWhereUniqueInput)
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
