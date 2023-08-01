import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatus } from './transaction-status.enum';
import { NestedEnumTransactionStatusFilter } from './nested-enum-transaction-status-filter.input';

@InputType()
export class EnumTransactionStatusFilter {

    @Field(() => TransactionStatus, {nullable:true})
    equals?: keyof typeof TransactionStatus;

    @Field(() => [TransactionStatus], {nullable:true})
    in?: Array<keyof typeof TransactionStatus>;

    @Field(() => [TransactionStatus], {nullable:true})
    notIn?: Array<keyof typeof TransactionStatus>;

    @Field(() => NestedEnumTransactionStatusFilter, {nullable:true})
    not?: NestedEnumTransactionStatusFilter;
}
