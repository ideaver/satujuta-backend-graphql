import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCategory } from './project-category.enum';

@InputType()
export class EnumProjectCategoryFieldUpdateOperationsInput {

    @Field(() => ProjectCategory, {nullable:true})
    set?: keyof typeof ProjectCategory;
}
