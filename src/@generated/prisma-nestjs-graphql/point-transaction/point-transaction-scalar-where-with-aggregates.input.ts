import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumPointTypeWithAggregatesFilter } from '../prisma/enum-point-type-with-aggregates-filter.input';
import { EnumTransactionTypeWithAggregatesFilter } from '../prisma/enum-transaction-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PointTransactionScalarWhereWithAggregatesInput {

    @Field(() => [PointTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PointTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [PointTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PointTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [PointTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PointTransactionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => EnumPointTypeWithAggregatesFilter, {nullable:true})
    pointType?: EnumPointTypeWithAggregatesFilter;

    @Field(() => EnumTransactionTypeWithAggregatesFilter, {nullable:true})
    transactionType?: EnumTransactionTypeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    currentBalance?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
