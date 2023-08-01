import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutClaimedRewardsInput } from '../user/user-create-nested-many-without-claimed-rewards.input';

@InputType()
export class RewardCreateWithoutImagesInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsNotEmpty()
    @Validator.IsAlphanumeric()
    name!: string;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    pointCost!: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(10)
    @Validator.IsNotEmpty()
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutClaimedRewardsInput, {nullable:true})
    claimers?: UserCreateNestedManyWithoutClaimedRewardsInput;
}
