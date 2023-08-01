import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class RewardWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [RewardWhereInput], {nullable:true})
    AND?: Array<RewardWhereInput>;

    @Field(() => [RewardWhereInput], {nullable:true})
    OR?: Array<RewardWhereInput>;

    @Field(() => [RewardWhereInput], {nullable:true})
    NOT?: Array<RewardWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    pointCost?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImagesListRelationFilter, {nullable:true})
    images?: ImagesListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    claimers?: UserListRelationFilter;
}
