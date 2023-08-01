import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumTransactionStatusFilter } from '../prisma/enum-transaction-status-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { EnumTransactionCategoryFilter } from '../prisma/enum-transaction-category-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { PaymentNullableRelationFilter } from '../payment/payment-nullable-relation-filter.input';

@InputType()
export class TransactionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Int, {nullable:true})
    accountId?: number;

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => EnumTransactionStatusFilter, {nullable:true})
    status?: EnumTransactionStatusFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    transactionType?: EnumTransactionTypeFilter;

    @Field(() => EnumTransactionCategoryFilter, {nullable:true})
    transactionCategory?: EnumTransactionCategoryFilter;

    @Field(() => FloatFilter, {nullable:true})
    currentBalance?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => PaymentNullableRelationFilter, {nullable:true})
    payment?: PaymentNullableRelationFilter;
}
