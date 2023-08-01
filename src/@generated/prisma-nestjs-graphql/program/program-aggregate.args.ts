import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';
import { Type } from 'class-transformer';
import { ProgramOrderByWithRelationInput } from './program-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgramCountAggregateInput } from './program-count-aggregate.input';
import { ProgramAvgAggregateInput } from './program-avg-aggregate.input';
import { ProgramSumAggregateInput } from './program-sum-aggregate.input';
import { ProgramMinAggregateInput } from './program-min-aggregate.input';
import { ProgramMaxAggregateInput } from './program-max-aggregate.input';

@ArgsType()
export class ProgramAggregateArgs {

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;

    @Field(() => [ProgramOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgramOrderByWithRelationInput>;

    @Field(() => ProgramWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgramCountAggregateInput, {nullable:true})
    _count?: ProgramCountAggregateInput;

    @Field(() => ProgramAvgAggregateInput, {nullable:true})
    _avg?: ProgramAvgAggregateInput;

    @Field(() => ProgramSumAggregateInput, {nullable:true})
    _sum?: ProgramSumAggregateInput;

    @Field(() => ProgramMinAggregateInput, {nullable:true})
    _min?: ProgramMinAggregateInput;

    @Field(() => ProgramMaxAggregateInput, {nullable:true})
    _max?: ProgramMaxAggregateInput;
}
