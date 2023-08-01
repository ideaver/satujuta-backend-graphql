import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentOrderByWithRelationInput } from '../payment/payment-order-by-with-relation.input';

@InputType()
export class PaymentConfirmationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ProofUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PaymentOrderByWithRelationInput, {nullable:true})
    payment?: PaymentOrderByWithRelationInput;
}
