import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemWhereInput } from './item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumUserRoleFilter } from '../prisma/enum-user-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';

@InputType()
export class ItemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    qty?: IntFilter;

    @Field(() => EnumUserRoleFilter, {nullable:true})
    userRole?: EnumUserRoleFilter;

    @Field(() => IntFilter, {nullable:true})
    orderId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;
}
