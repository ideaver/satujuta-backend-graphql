import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PaymentScalarWhereInput {

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    AND?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    OR?: Array<PaymentScalarWhereInput>;

    @Field(() => [PaymentScalarWhereInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    adminFee?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalPayment?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    orderId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    transactionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
