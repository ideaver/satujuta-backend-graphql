import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Type } from 'class-transformer';
import { BankCreateWithoutAccountInput } from './bank-create-without-account.input';

@InputType()
export class BankCreateOrConnectWithoutAccountInput {

    @Field(() => BankWhereUniqueInput, {nullable:false})
    @Type(() => BankWhereUniqueInput)
    where!: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => BankCreateWithoutAccountInput, {nullable:false})
    @Type(() => BankCreateWithoutAccountInput)
    create!: BankCreateWithoutAccountInput;
}
