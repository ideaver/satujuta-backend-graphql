import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    platformFee?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
}
