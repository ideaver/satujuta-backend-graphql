import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRewardArgs {

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;
}
