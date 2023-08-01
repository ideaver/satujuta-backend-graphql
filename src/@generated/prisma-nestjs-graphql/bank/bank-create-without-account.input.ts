import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class BankCreateWithoutAccountInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(1)
    @Validator.MaxLength(10)
    @Validator.IsAlphanumeric()
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl({ require_protocol: true })
    @Validator.IsNotEmpty()
    logoUrl!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    accountNumber!: number;
}
