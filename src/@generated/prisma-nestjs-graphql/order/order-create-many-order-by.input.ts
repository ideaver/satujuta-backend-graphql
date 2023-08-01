import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionStatus } from '../prisma/transaction-status.enum';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class OrderCreateManyOrderByInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => TransactionStatus, {nullable:false})
    status!: keyof typeof TransactionStatus;

    @Field(() => Int, {nullable:true})
    shippingId?: number;

    @Field(() => Boolean, {nullable:false})
    isFullPaid!: boolean;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    cost!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    platformFee!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    total!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
