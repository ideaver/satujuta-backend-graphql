import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardCreateManyInput } from './reward-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRewardArgs {

    @Field(() => [RewardCreateManyInput], {nullable:false})
    @Type(() => RewardCreateManyInput)
    data!: Array<RewardCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
