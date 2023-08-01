import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCategory } from './account-category.enum';

@InputType()
export class EnumAccountCategoryFieldUpdateOperationsInput {

    @Field(() => AccountCategory, {nullable:true})
    set?: keyof typeof AccountCategory;
}
