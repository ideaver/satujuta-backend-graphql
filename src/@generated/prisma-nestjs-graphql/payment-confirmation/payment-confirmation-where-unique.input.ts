import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PaymentRelationFilter } from '../payment/payment-relation-filter.input';

@InputType()
export class PaymentConfirmationWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    paymentId?: number;

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    AND?: Array<PaymentConfirmationWhereInput>;

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    OR?: Array<PaymentConfirmationWhereInput>;

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    NOT?: Array<PaymentConfirmationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    ProofUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentRelationFilter, {nullable:true})
    payment?: PaymentRelationFilter;
}
