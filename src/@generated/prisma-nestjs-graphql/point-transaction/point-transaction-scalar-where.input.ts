import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumPointTypeFilter } from '../prisma/enum-point-type-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PointTransactionScalarWhereInput {

    @Field(() => [PointTransactionScalarWhereInput], {nullable:true})
    AND?: Array<PointTransactionScalarWhereInput>;

    @Field(() => [PointTransactionScalarWhereInput], {nullable:true})
    OR?: Array<PointTransactionScalarWhereInput>;

    @Field(() => [PointTransactionScalarWhereInput], {nullable:true})
    NOT?: Array<PointTransactionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => EnumPointTypeFilter, {nullable:true})
    pointType?: EnumPointTypeFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    transactionType?: EnumTransactionTypeFilter;

    @Field(() => FloatFilter, {nullable:true})
    currentBalance?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
