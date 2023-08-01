import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';
import { Type } from 'class-transformer';
import { ImagesOrderByWithAggregationInput } from './images-order-by-with-aggregation.input';
import { ImagesScalarFieldEnum } from './images-scalar-field.enum';
import { ImagesScalarWhereWithAggregatesInput } from './images-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImagesCountAggregateInput } from './images-count-aggregate.input';
import { ImagesAvgAggregateInput } from './images-avg-aggregate.input';
import { ImagesSumAggregateInput } from './images-sum-aggregate.input';
import { ImagesMinAggregateInput } from './images-min-aggregate.input';
import { ImagesMaxAggregateInput } from './images-max-aggregate.input';

@ArgsType()
export class ImagesGroupByArgs {

    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: ImagesWhereInput;

    @Field(() => [ImagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithAggregationInput>;

    @Field(() => [ImagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImagesScalarFieldEnum>;

    @Field(() => ImagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImagesCountAggregateInput, {nullable:true})
    _count?: ImagesCountAggregateInput;

    @Field(() => ImagesAvgAggregateInput, {nullable:true})
    _avg?: ImagesAvgAggregateInput;

    @Field(() => ImagesSumAggregateInput, {nullable:true})
    _sum?: ImagesSumAggregateInput;

    @Field(() => ImagesMinAggregateInput, {nullable:true})
    _min?: ImagesMinAggregateInput;

    @Field(() => ImagesMaxAggregateInput, {nullable:true})
    _max?: ImagesMaxAggregateInput;
}
