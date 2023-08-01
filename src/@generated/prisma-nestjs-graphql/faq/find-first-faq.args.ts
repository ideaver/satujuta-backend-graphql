import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqWhereInput } from './faq-where.input';
import { Type } from 'class-transformer';
import { FaqOrderByWithRelationInput } from './faq-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FaqWhereUniqueInput } from './faq-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FaqScalarFieldEnum } from './faq-scalar-field.enum';

@ArgsType()
export class FindFirstFaqArgs {

    @Field(() => FaqWhereInput, {nullable:true})
    @Type(() => FaqWhereInput)
    where?: FaqWhereInput;

    @Field(() => [FaqOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FaqOrderByWithRelationInput>;

    @Field(() => FaqWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FaqWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FaqScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FaqScalarFieldEnum>;
}
