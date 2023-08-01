import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PaymentRelationFilter } from '../payment/payment-relation-filter.input';

@InputType()
export class PaymentConfirmationWhereInput {

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    AND?: Array<PaymentConfirmationWhereInput>;

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    OR?: Array<PaymentConfirmationWhereInput>;

    @Field(() => [PaymentConfirmationWhereInput], {nullable:true})
    NOT?: Array<PaymentConfirmationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    ProofUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    paymentId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentRelationFilter, {nullable:true})
    payment?: PaymentRelationFilter;
}
