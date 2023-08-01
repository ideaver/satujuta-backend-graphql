import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';
import { SchoolOrderByWithRelationInput } from './school-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SchoolCountAggregateInput } from './school-count-aggregate.input';
import { SchoolAvgAggregateInput } from './school-avg-aggregate.input';
import { SchoolSumAggregateInput } from './school-sum-aggregate.input';
import { SchoolMinAggregateInput } from './school-min-aggregate.input';
import { SchoolMaxAggregateInput } from './school-max-aggregate.input';

@ArgsType()
export class SchoolAggregateArgs {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;

    @Field(() => [SchoolOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SchoolOrderByWithRelationInput>;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SchoolCountAggregateInput, {nullable:true})
    _count?: SchoolCountAggregateInput;

    @Field(() => SchoolAvgAggregateInput, {nullable:true})
    _avg?: SchoolAvgAggregateInput;

    @Field(() => SchoolSumAggregateInput, {nullable:true})
    _sum?: SchoolSumAggregateInput;

    @Field(() => SchoolMinAggregateInput, {nullable:true})
    _min?: SchoolMinAggregateInput;

    @Field(() => SchoolMaxAggregateInput, {nullable:true})
    _max?: SchoolMaxAggregateInput;
}
