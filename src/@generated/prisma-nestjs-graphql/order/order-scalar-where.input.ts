import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumTransactionStatusFilter } from '../prisma/enum-transaction-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumTransactionStatusFilter, {nullable:true})
    status?: EnumTransactionStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    orderById?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    shippingId?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFullPaid?: BoolFilter;

    @Field(() => FloatFilter, {nullable:true})
    cost?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    platformFee?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    total?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
