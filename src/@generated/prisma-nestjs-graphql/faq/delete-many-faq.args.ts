import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqWhereInput } from './faq-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFaqArgs {

    @Field(() => FaqWhereInput, {nullable:true})
    @Type(() => FaqWhereInput)
    where?: FaqWhereInput;
}
