import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class BankWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => [BankWhereInput], {nullable:true})
    AND?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    OR?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    NOT?: Array<BankWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logoUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    accountNumber?: IntFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;
}
