import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardCreateInput } from './reward-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRewardArgs {

    @Field(() => RewardCreateInput, {nullable:false})
    @Type(() => RewardCreateInput)
    data!: RewardCreateInput;
}
