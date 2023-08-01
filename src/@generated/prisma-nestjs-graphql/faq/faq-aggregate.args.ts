import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FaqWhereInput } from './faq-where.input';
import { Type } from 'class-transformer';
import { FaqOrderByWithRelationInput } from './faq-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FaqWhereUniqueInput } from './faq-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FaqCountAggregateInput } from './faq-count-aggregate.input';
import { FaqAvgAggregateInput } from './faq-avg-aggregate.input';
import { FaqSumAggregateInput } from './faq-sum-aggregate.input';
import { FaqMinAggregateInput } from './faq-min-aggregate.input';
import { FaqMaxAggregateInput } from './faq-max-aggregate.input';

@ArgsType()
export class FaqAggregateArgs {

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

    @Field(() => FaqCountAggregateInput, {nullable:true})
    _count?: FaqCountAggregateInput;

    @Field(() => FaqAvgAggregateInput, {nullable:true})
    _avg?: FaqAvgAggregateInput;

    @Field(() => FaqSumAggregateInput, {nullable:true})
    _sum?: FaqSumAggregateInput;

    @Field(() => FaqMinAggregateInput, {nullable:true})
    _min?: FaqMinAggregateInput;

    @Field(() => FaqMaxAggregateInput, {nullable:true})
    _max?: FaqMaxAggregateInput;
}
