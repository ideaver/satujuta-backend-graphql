import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardUpdateInput } from './reward-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';

@ArgsType()
export class UpdateOneRewardArgs {

    @Field(() => RewardUpdateInput, {nullable:false})
    @Type(() => RewardUpdateInput)
    data!: RewardUpdateInput;

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
