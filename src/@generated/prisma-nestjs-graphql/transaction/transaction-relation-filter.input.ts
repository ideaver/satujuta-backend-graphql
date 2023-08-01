import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';

@InputType()
export class TransactionRelationFilter {

    @Field(() => TransactionWhereInput, {nullable:true})
    is?: TransactionWhereInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    isNot?: TransactionWhereInput;
}
