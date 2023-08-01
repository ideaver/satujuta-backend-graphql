import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatus } from './transaction-status.enum';
import { NestedEnumTransactionStatusWithAggregatesFilter } from './nested-enum-transaction-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransactionStatusFilter } from './nested-enum-transaction-status-filter.input';

@InputType()
export class EnumTransactionStatusWithAggregatesFilter {

    @Field(() => TransactionStatus, {nullable:true})
    equals?: keyof typeof TransactionStatus;

    @Field(() => [TransactionStatus], {nullable:true})
    in?: Array<keyof typeof TransactionStatus>;

    @Field(() => [TransactionStatus], {nullable:true})
    notIn?: Array<keyof typeof TransactionStatus>;

    @Field(() => NestedEnumTransactionStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransactionStatusFilter, {nullable:true})
    _min?: NestedEnumTransactionStatusFilter;

    @Field(() => NestedEnumTransactionStatusFilter, {nullable:true})
    _max?: NestedEnumTransactionStatusFilter;
}
