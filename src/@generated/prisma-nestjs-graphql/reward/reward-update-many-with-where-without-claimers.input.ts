import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardScalarWhereInput } from './reward-scalar-where.input';
import { Type } from 'class-transformer';
import { RewardUpdateManyMutationInput } from './reward-update-many-mutation.input';

@InputType()
export class RewardUpdateManyWithWhereWithoutClaimersInput {

    @Field(() => RewardScalarWhereInput, {nullable:false})
    @Type(() => RewardScalarWhereInput)
    where!: RewardScalarWhereInput;

    @Field(() => RewardUpdateManyMutationInput, {nullable:false})
    @Type(() => RewardUpdateManyMutationInput)
    data!: RewardUpdateManyMutationInput;
}
