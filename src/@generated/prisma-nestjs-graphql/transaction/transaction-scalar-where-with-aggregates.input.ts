import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumTransactionStatusWithAggregatesFilter } from '../prisma/enum-transaction-status-with-aggregates-filter.input';
import { EnumTransactionTypeWithAggregatesFilter } from '../prisma/enum-transaction-type-with-aggregates-filter.input';
import { EnumTransactionCategoryWithAggregatesFilter } from '../prisma/enum-transaction-category-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TransactionScalarWhereWithAggregatesInput {

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => EnumTransactionStatusWithAggregatesFilter, {nullable:true})
    status?: EnumTransactionStatusWithAggregatesFilter;

    @Field(() => EnumTransactionTypeWithAggregatesFilter, {nullable:true})
    transactionType?: EnumTransactionTypeWithAggregatesFilter;

    @Field(() => EnumTransactionCategoryWithAggregatesFilter, {nullable:true})
    transactionCategory?: EnumTransactionCategoryWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    currentBalance?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    accountId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
