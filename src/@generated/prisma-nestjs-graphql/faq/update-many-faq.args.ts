import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqUpdateManyMutationInput } from './faq-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FaqWhereInput } from './faq-where.input';

@ArgsType()
export class UpdateManyFaqArgs {

    @Field(() => FaqUpdateManyMutationInput, {nullable:false})
    @Type(() => FaqUpdateManyMutationInput)
    data!: FaqUpdateManyMutationInput;

    @Field(() => FaqWhereInput, {nullable:true})
    @Type(() => FaqWhereInput)
    where?: FaqWhereInput;
}
