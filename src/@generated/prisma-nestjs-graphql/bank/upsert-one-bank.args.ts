import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Type } from 'class-transformer';
import { BankCreateInput } from './bank-create.input';
import { BankUpdateInput } from './bank-update.input';

@ArgsType()
export class UpsertOneBankArgs {

    @Field(() => BankWhereUniqueInput, {nullable:false})
    @Type(() => BankWhereUniqueInput)
    where!: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => BankCreateInput, {nullable:false})
    @Type(() => BankCreateInput)
    create!: BankCreateInput;

    @Field(() => BankUpdateInput, {nullable:false})
    @Type(() => BankUpdateInput)
    update!: BankUpdateInput;
}
