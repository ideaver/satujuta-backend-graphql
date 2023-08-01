import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PointTransactionWhereInput } from './point-transaction-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumPointTypeFilter } from '../prisma/enum-point-type-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PointTransactionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PointTransactionWhereInput], {nullable:true})
    AND?: Array<PointTransactionWhereInput>;

    @Field(() => [PointTransactionWhereInput], {nullable:true})
    OR?: Array<PointTransactionWhereInput>;

    @Field(() => [PointTransactionWhereInput], {nullable:true})
    NOT?: Array<PointTransactionWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;
}
