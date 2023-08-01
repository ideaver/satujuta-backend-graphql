import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';

@InputType()
export class RewardNullableRelationFilter {

    @Field(() => RewardWhereInput, {nullable:true})
    is?: RewardWhereInput;

    @Field(() => RewardWhereInput, {nullable:true})
    isNot?: RewardWhereInput;
}
