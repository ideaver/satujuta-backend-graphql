import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RewardScalarWhereInput {

    @Field(() => [RewardScalarWhereInput], {nullable:true})
    AND?: Array<RewardScalarWhereInput>;

    @Field(() => [RewardScalarWhereInput], {nullable:true})
    OR?: Array<RewardScalarWhereInput>;

    @Field(() => [RewardScalarWhereInput], {nullable:true})
    NOT?: Array<RewardScalarWhereInput>;

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
}
