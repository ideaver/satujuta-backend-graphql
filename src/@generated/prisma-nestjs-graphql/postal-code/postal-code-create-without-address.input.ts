import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class PostalCodeCreateWithoutAddressInput {

    @Field(() => Int, {nullable:false})
    @Validator.MinLength(3)
    @Validator.IsPostalCode('ID')
    code!: number;
}
