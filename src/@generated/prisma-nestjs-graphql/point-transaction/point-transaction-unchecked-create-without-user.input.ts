import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PointType } from '../prisma/point-type.enum';
import { TransactionType } from '../prisma/transaction-type.enum';

@InputType()
export class PointTransactionUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    amount!: number;

    @Field(() => PointType, {nullable:false})
    pointType!: keyof typeof PointType;

    @Field(() => TransactionType, {nullable:false})
    transactionType!: keyof typeof TransactionType;

    @Field(() => Float, {nullable:true})
    currentBalance?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
