import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqCreateManyInput } from './faq-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFaqArgs {

    @Field(() => [FaqCreateManyInput], {nullable:false})
    @Type(() => FaqCreateManyInput)
    data!: Array<FaqCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
