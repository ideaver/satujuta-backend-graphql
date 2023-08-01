import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PaymentConfirmationScalarWhereWithAggregatesInput {

    @Field(() => [PaymentConfirmationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentConfirmationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentConfirmationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentConfirmationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ProofUrl?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    paymentId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
