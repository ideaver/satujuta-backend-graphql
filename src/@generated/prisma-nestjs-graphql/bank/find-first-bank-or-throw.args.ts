import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { BankOrderByWithRelationInput } from './bank-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BankScalarFieldEnum } from './bank-scalar-field.enum';

@ArgsType()
export class FindFirstBankOrThrowArgs {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => [BankOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BankOrderByWithRelationInput>;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BankScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
