import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';
import { TransactionOrderByWithRelationInput } from '../transaction/transaction-order-by-with-relation.input';
import { PaymentConfirmationOrderByWithRelationInput } from '../payment-confirmation/payment-confirmation-order-by-with-relation.input';

@InputType()
export class PaymentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    adminFee?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPayment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => TransactionOrderByWithRelationInput, {nullable:true})
    transaction?: TransactionOrderByWithRelationInput;

    @Field(() => PaymentConfirmationOrderByWithRelationInput, {nullable:true})
    confirmation?: PaymentConfirmationOrderByWithRelationInput;
}
