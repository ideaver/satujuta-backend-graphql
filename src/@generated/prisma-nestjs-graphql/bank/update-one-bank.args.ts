import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankUpdateInput } from './bank-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';

@ArgsType()
export class UpdateOneBankArgs {

    @Field(() => BankUpdateInput, {nullable:false})
    @Type(() => BankUpdateInput)
    data!: BankUpdateInput;

    @Field(() => BankWhereUniqueInput, {nullable:false})
    @Type(() => BankWhereUniqueInput)
    where!: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
