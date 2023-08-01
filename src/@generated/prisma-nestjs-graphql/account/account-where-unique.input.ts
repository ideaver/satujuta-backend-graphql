import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAccountCategoryFilter } from '../prisma/enum-account-category-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';
import { ProjectNullableRelationFilter } from '../project/project-nullable-relation-filter.input';
import { BankNullableRelationFilter } from '../bank/bank-nullable-relation-filter.input';

@InputType()
export class AccountWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AccountWhereInput], {nullable:true})
    AND?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    OR?: Array<AccountWhereInput>;

    @Field(() => [AccountWhereInput], {nullable:true})
    NOT?: Array<AccountWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    accountNumber?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => EnumAccountCategoryFilter, {nullable:true})
    accountCategory?: EnumAccountCategoryFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transactions?: TransactionListRelationFilter;

    @Field(() => ProjectNullableRelationFilter, {nullable:true})
    project?: ProjectNullableRelationFilter;

    @Field(() => BankNullableRelationFilter, {nullable:true})
    bankAccount?: BankNullableRelationFilter;
}
