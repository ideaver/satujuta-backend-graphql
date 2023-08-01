import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ImagesListRelationFilter } from '../images/images-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class RewardWhereInput {

    @Field(() => [RewardWhereInput], {nullable:true})
    AND?: Array<RewardWhereInput>;

    @Field(() => [RewardWhereInput], {nullable:true})
    OR?: Array<RewardWhereInput>;

    @Field(() => [RewardWhereInput], {nullable:true})
    NOT?: Array<RewardWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
