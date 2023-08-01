import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FaqWhereUniqueInput } from './faq-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFaqOrThrowArgs {

    @Field(() => FaqWhereUniqueInput, {nullable:false})
    @Type(() => FaqWhereUniqueInput)
    where!: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;
}
