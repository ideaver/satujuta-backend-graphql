import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PaymentScalarWhereWithAggregatesInput {

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    adminFee?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    totalPayment?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    transactionId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
