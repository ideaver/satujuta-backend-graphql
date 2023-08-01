import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBankOrThrowArgs {

    @Field(() => BankWhereUniqueInput, {nullable:false})
    @Type(() => BankWhereUniqueInput)
    where!: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;
}
