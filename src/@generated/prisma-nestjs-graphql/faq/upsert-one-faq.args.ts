import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FaqWhereUniqueInput } from './faq-where-unique.input';
import { Type } from 'class-transformer';
import { FaqCreateInput } from './faq-create.input';
import { FaqUpdateInput } from './faq-update.input';

@ArgsType()
export class UpsertOneFaqArgs {

    @Field(() => FaqWhereUniqueInput, {nullable:false})
    @Type(() => FaqWhereUniqueInput)
    where!: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;

    @Field(() => FaqCreateInput, {nullable:false})
    @Type(() => FaqCreateInput)
    create!: FaqCreateInput;

    @Field(() => FaqUpdateInput, {nullable:false})
    @Type(() => FaqUpdateInput)
    update!: FaqUpdateInput;
}
