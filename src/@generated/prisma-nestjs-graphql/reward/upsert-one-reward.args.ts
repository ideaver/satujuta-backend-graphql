import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Type } from 'class-transformer';
import { RewardCreateInput } from './reward-create.input';
import { RewardUpdateInput } from './reward-update.input';

@ArgsType()
export class UpsertOneRewardArgs {

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardCreateInput, {nullable:false})
    @Type(() => RewardCreateInput)
    create!: RewardCreateInput;

    @Field(() => RewardUpdateInput, {nullable:false})
    @Type(() => RewardUpdateInput)
    update!: RewardUpdateInput;
}
