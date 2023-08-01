import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeWhereInput } from './postal-code-where.input';
import { Type } from 'class-transformer';
import { PostalCodeOrderByWithRelationInput } from './postal-code-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostalCodeWhereUniqueInput } from './postal-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostalCodeCountAggregateInput } from './postal-code-count-aggregate.input';
import { PostalCodeAvgAggregateInput } from './postal-code-avg-aggregate.input';
import { PostalCodeSumAggregateInput } from './postal-code-sum-aggregate.input';
import { PostalCodeMinAggregateInput } from './postal-code-min-aggregate.input';
import { PostalCodeMaxAggregateInput } from './postal-code-max-aggregate.input';

@ArgsType()
export class PostalCodeAggregateArgs {

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;

    @Field(() => [PostalCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostalCodeOrderByWithRelationInput>;

    @Field(() => PostalCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PostalCodeWhereUniqueInput, 'id' | 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostalCodeCountAggregateInput, {nullable:true})
    _count?: PostalCodeCountAggregateInput;

    @Field(() => PostalCodeAvgAggregateInput, {nullable:true})
    _avg?: PostalCodeAvgAggregateInput;

    @Field(() => PostalCodeSumAggregateInput, {nullable:true})
    _sum?: PostalCodeSumAggregateInput;

    @Field(() => PostalCodeMinAggregateInput, {nullable:true})
    _min?: PostalCodeMinAggregateInput;

    @Field(() => PostalCodeMaxAggregateInput, {nullable:true})
    _max?: PostalCodeMaxAggregateInput;
}
