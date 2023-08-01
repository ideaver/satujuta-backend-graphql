import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelOrderByWithRelationInput } from './hotel-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HotelCountAggregateInput } from './hotel-count-aggregate.input';
import { HotelAvgAggregateInput } from './hotel-avg-aggregate.input';
import { HotelSumAggregateInput } from './hotel-sum-aggregate.input';
import { HotelMinAggregateInput } from './hotel-min-aggregate.input';
import { HotelMaxAggregateInput } from './hotel-max-aggregate.input';

@ArgsType()
export class HotelAggregateArgs {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => [HotelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HotelOrderByWithRelationInput>;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

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
