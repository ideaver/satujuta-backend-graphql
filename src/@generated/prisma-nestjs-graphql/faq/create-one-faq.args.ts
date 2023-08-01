import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqCreateInput } from './faq-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFaqArgs {

    @Field(() => FaqCreateInput, {nullable:false})
    @Type(() => FaqCreateInput)
    data!: FaqCreateInput;
}
