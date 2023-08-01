import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';
import { Type } from 'class-transformer';
import { ImagesOrderByWithRelationInput } from './images-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImagesCountAggregateInput } from './images-count-aggregate.input';
import { ImagesAvgAggregateInput } from './images-avg-aggregate.input';
import { ImagesSumAggregateInput } from './images-sum-aggregate.input';
import { ImagesMinAggregateInput } from './images-min-aggregate.input';
import { ImagesMaxAggregateInput } from './images-max-aggregate.input';

@ArgsType()
export class ImagesAggregateArgs {

    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: ImagesWhereInput;

    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;

    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

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
