import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointTransactionWhereInput } from './point-transaction-where.input';

@InputType()
export class PointTransactionListRelationFilter {

    @Field(() => PointTransactionWhereInput, {nullable:true})
    every?: PointTransactionWhereInput;

    @Field(() => PointTransactionWhereInput, {nullable:true})
    some?: PointTransactionWhereInput;

    @Field(() => PointTransactionWhereInput, {nullable:true})
    none?: PointTransactionWhereInput;
}
