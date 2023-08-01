import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';

@InputType()
export class BankWhereInput {

    @Field(() => [BankWhereInput], {nullable:true})
    AND?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    OR?: Array<BankWhereInput>;

    @Field(() => [BankWhereInput], {nullable:true})
    NOT?: Array<BankWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logoUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    accountNumber?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;
}
