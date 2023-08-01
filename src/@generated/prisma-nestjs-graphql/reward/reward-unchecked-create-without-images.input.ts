import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutClaimedRewardsInput } from '../user/user-unchecked-create-nested-many-without-claimed-rewards.input';

@InputType()
export class RewardUncheckedCreateWithoutImagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserUncheckedCreateNestedManyWithoutClaimedRewardsInput, {nullable:true})
    claimers?: UserUncheckedCreateNestedManyWithoutClaimedRewardsInput;
}
