import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCategory } from './transaction-category.enum';

@InputType()
export class EnumTransactionCategoryFieldUpdateOperationsInput {

    @Field(() => TransactionCategory, {nullable:true})
    set?: keyof typeof TransactionCategory;
}
