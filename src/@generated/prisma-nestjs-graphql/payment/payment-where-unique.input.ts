import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';
import { TransactionRelationFilter } from '../transaction/transaction-relation-filter.input';
import { PaymentConfirmationNullableRelationFilter } from '../payment-confirmation/payment-confirmation-nullable-relation-filter.input';

@InputType()
export class PaymentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    transactionId?: number;

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    adminFee?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalPayment?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    orderId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => TransactionRelationFilter, {nullable:true})
    transaction?: TransactionRelationFilter;

    @Field(() => PaymentConfirmationNullableRelationFilter, {nullable:true})
    confirmation?: PaymentConfirmationNullableRelationFilter;
}
