import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelOrderByWithAggregationInput } from './hotel-order-by-with-aggregation.input';
import { HotelScalarFieldEnum } from './hotel-scalar-field.enum';
import { HotelScalarWhereWithAggregatesInput } from './hotel-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HotelCountAggregateInput } from './hotel-count-aggregate.input';
import { HotelAvgAggregateInput } from './hotel-avg-aggregate.input';
import { HotelSumAggregateInput } from './hotel-sum-aggregate.input';
import { HotelMinAggregateInput } from './hotel-min-aggregate.input';
import { HotelMaxAggregateInput } from './hotel-max-aggregate.input';

@ArgsType()
export class HotelGroupByArgs {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => [HotelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HotelOrderByWithAggregationInput>;

    @Field(() => [HotelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HotelScalarFieldEnum>;

    @Field(() => HotelScalarWhereWithAggregatesInput, {nullable:true})
    having?: HotelScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HotelCountAggregateInput, {nullable:true})
    _count?: HotelCountAggregateInput;

    @Field(() => HotelAvgAggregateInput, {nullable:true})
    _avg?: HotelAvgAggregateInput;

    @Field(() => HotelSumAggregateInput, {nullable:true})
    _sum?: HotelSumAggregateInput;

    @Field(() => HotelMinAggregateInput, {nullable:true})
    _min?: HotelMinAggregateInput;

    @Field(() => HotelMaxAggregateInput, {nullable:true})
    _max?: HotelMaxAggregateInput;
}
