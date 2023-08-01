import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';

@InputType()
export class BankNullableRelationFilter {

    @Field(() => BankWhereInput, {nullable:true})
    is?: BankWhereInput;

    @Field(() => BankWhereInput, {nullable:true})
    isNot?: BankWhereInput;
}
