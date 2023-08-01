import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramCategoryWhereInput } from './program-category-where.input';
import { Type } from 'class-transformer';
import { ProgramCategoryOrderByWithAggregationInput } from './program-category-order-by-with-aggregation.input';
import { ProgramCategoryScalarFieldEnum } from './program-category-scalar-field.enum';
import { ProgramCategoryScalarWhereWithAggregatesInput } from './program-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProgramCategoryCountAggregateInput } from './program-category-count-aggregate.input';
import { ProgramCategoryAvgAggregateInput } from './program-category-avg-aggregate.input';
import { ProgramCategorySumAggregateInput } from './program-category-sum-aggregate.input';
import { ProgramCategoryMinAggregateInput } from './program-category-min-aggregate.input';
import { ProgramCategoryMaxAggregateInput } from './program-category-max-aggregate.input';

@ArgsType()
export class ProgramCategoryGroupByArgs {

    @Field(() => ProgramCategoryWhereInput, {nullable:true})
    @Type(() => ProgramCategoryWhereInput)
    where?: ProgramCategoryWhereInput;

    @Field(() => [ProgramCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProgramCategoryOrderByWithAggregationInput>;

    @Field(() => [ProgramCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProgramCategoryScalarFieldEnum>;

    @Field(() => ProgramCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProgramCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProgramCategoryCountAggregateInput, {nullable:true})
    _count?: ProgramCategoryCountAggregateInput;

    @Field(() => ProgramCategoryAvgAggregateInput, {nullable:true})
    _avg?: ProgramCategoryAvgAggregateInput;

    @Field(() => ProgramCategorySumAggregateInput, {nullable:true})
    _sum?: ProgramCategorySumAggregateInput;

    @Field(() => ProgramCategoryMinAggregateInput, {nullable:true})
    _min?: ProgramCategoryMinAggregateInput;

    @Field(() => ProgramCategoryMaxAggregateInput, {nullable:true})
    _max?: ProgramCategoryMaxAggregateInput;
}
