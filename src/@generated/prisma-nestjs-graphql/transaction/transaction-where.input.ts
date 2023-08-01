import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumTransactionStatusFilter } from '../prisma/enum-transaction-status-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { EnumTransactionCategoryFilter } from '../prisma/enum-transaction-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { PaymentNullableRelationFilter } from '../payment/payment-nullable-relation-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => PaymentNullableRelationFilter, {nullable:true})
    payment?: PaymentNullableRelationFilter;
}
