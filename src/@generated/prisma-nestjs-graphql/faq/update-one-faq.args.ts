import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqUpdateInput } from './faq-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FaqWhereUniqueInput } from './faq-where-unique.input';

@ArgsType()
export class UpdateOneFaqArgs {

    @Field(() => FaqUpdateInput, {nullable:false})
    @Type(() => FaqUpdateInput)
    data!: FaqUpdateInput;

    @Field(() => FaqWhereUniqueInput, {nullable:false})
    @Type(() => FaqWhereUniqueInput)
    where!: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
