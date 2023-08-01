import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Payment } from '../payment/payment.model';

@ObjectType()
export class PaymentConfirmation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    ProofUrl!: string;

    @Field(() => Int, {nullable:false})
    paymentId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Payment, {nullable:false})
    payment?: Payment;
}
