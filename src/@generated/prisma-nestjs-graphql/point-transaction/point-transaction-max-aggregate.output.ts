import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PointType } from '../prisma/point-type.enum';
import { TransactionType } from '../prisma/transaction-type.enum';

@ObjectType()
export class PointTransactionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => PointType, {nullable:true})
    pointType?: keyof typeof PointType;

    @Field(() => TransactionType, {nullable:true})
    transactionType?: keyof typeof TransactionType;

    @Field(() => Float, {nullable:true})
    currentBalance?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
