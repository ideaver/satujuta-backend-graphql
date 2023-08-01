import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ImagesCountOrderByAggregateInput } from './images-count-order-by-aggregate.input';
import { ImagesAvgOrderByAggregateInput } from './images-avg-order-by-aggregate.input';
import { ImagesMaxOrderByAggregateInput } from './images-max-order-by-aggregate.input';
import { ImagesMinOrderByAggregateInput } from './images-min-order-by-aggregate.input';
import { ImagesSumOrderByAggregateInput } from './images-sum-order-by-aggregate.input';

@InputType()
export class ImagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    hotelImageId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    programImageId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rewardImageId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectImageId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ImagesCountOrderByAggregateInput, {nullable:true})
    _count?: ImagesCountOrderByAggregateInput;

    @Field(() => ImagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImagesAvgOrderByAggregateInput;

    @Field(() => ImagesMaxOrderByAggregateInput, {nullable:true})
    _max?: ImagesMaxOrderByAggregateInput;

    @Field(() => ImagesMinOrderByAggregateInput, {nullable:true})
    _min?: ImagesMinOrderByAggregateInput;

    @Field(() => ImagesSumOrderByAggregateInput, {nullable:true})
    _sum?: ImagesSumOrderByAggregateInput;
}
