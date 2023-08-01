import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';

@InputType()
export class RewardListRelationFilter {

    @Field(() => RewardWhereInput, {nullable:true})
    every?: RewardWhereInput;

    @Field(() => RewardWhereInput, {nullable:true})
    some?: RewardWhereInput;

    @Field(() => RewardWhereInput, {nullable:true})
    none?: RewardWhereInput;
}
