import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImagesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hotelImageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    programImageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rewardImageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectImageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
