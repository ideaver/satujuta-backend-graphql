import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';

@InputType()
export class RewardCreateManyInput {

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
}
