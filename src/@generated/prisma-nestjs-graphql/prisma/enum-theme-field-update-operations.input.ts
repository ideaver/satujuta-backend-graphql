import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Theme } from './theme.enum';

@InputType()
export class EnumThemeFieldUpdateOperationsInput {

    @Field(() => Theme, {nullable:true})
    set?: keyof typeof Theme;
}
