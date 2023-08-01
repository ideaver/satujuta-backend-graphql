import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardUpdateManyMutationInput } from './reward-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RewardWhereInput } from './reward-where.input';

@ArgsType()
export class UpdateManyRewardArgs {

    @Field(() => RewardUpdateManyMutationInput, {nullable:false})
    @Type(() => RewardUpdateManyMutationInput)
    data!: RewardUpdateManyMutationInput;

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;
}
