import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HotelOrderByWithRelationInput } from '../hotel/hotel-order-by-with-relation.input';
import { ProgramOrderByWithRelationInput } from '../program/program-order-by-with-relation.input';
import { RewardOrderByWithRelationInput } from '../reward/reward-order-by-with-relation.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';

@InputType()
export class ImagesOrderByWithRelationInput {

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

    @Field(() => HotelOrderByWithRelationInput, {nullable:true})
    hotelImage?: HotelOrderByWithRelationInput;

    @Field(() => ProgramOrderByWithRelationInput, {nullable:true})
    programImage?: ProgramOrderByWithRelationInput;

    @Field(() => RewardOrderByWithRelationInput, {nullable:true})
    rewardImage?: RewardOrderByWithRelationInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    projectImage?: ProjectOrderByWithRelationInput;
}
