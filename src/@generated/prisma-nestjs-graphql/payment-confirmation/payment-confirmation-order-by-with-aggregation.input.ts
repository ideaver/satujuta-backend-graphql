import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentConfirmationCountOrderByAggregateInput } from './payment-confirmation-count-order-by-aggregate.input';
import { PaymentConfirmationAvgOrderByAggregateInput } from './payment-confirmation-avg-order-by-aggregate.input';
import { PaymentConfirmationMaxOrderByAggregateInput } from './payment-confirmation-max-order-by-aggregate.input';
import { PaymentConfirmationMinOrderByAggregateInput } from './payment-confirmation-min-order-by-aggregate.input';
import { PaymentConfirmationSumOrderByAggregateInput } from './payment-confirmation-sum-order-by-aggregate.input';

@InputType()
export class PaymentConfirmationOrderByWithAggregationInput {

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

    @Field(() => PaymentConfirmationCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentConfirmationCountOrderByAggregateInput;

    @Field(() => PaymentConfirmationAvgOrderByAggregateInput, {nullable:true})
    _avg?: PaymentConfirmationAvgOrderByAggregateInput;

    @Field(() => PaymentConfirmationMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentConfirmationMaxOrderByAggregateInput;

    @Field(() => PaymentConfirmationMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentConfirmationMinOrderByAggregateInput;

    @Field(() => PaymentConfirmationSumOrderByAggregateInput, {nullable:true})
    _sum?: PaymentConfirmationSumOrderByAggregateInput;
}
