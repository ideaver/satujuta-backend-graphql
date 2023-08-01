import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserNotificationCountOrderByAggregateInput } from './user-notification-count-order-by-aggregate.input';
import { UserNotificationAvgOrderByAggregateInput } from './user-notification-avg-order-by-aggregate.input';
import { UserNotificationMaxOrderByAggregateInput } from './user-notification-max-order-by-aggregate.input';
import { UserNotificationMinOrderByAggregateInput } from './user-notification-min-order-by-aggregate.input';
import { UserNotificationSumOrderByAggregateInput } from './user-notification-sum-order-by-aggregate.input';

@InputType()
export class UserNotificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subtitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isCleared?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deepLink?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fcmToken?: SortOrderInput;

    @Field(() => UserNotificationCountOrderByAggregateInput, {nullable:true})
    _count?: UserNotificationCountOrderByAggregateInput;

    @Field(() => UserNotificationAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserNotificationAvgOrderByAggregateInput;

    @Field(() => UserNotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: UserNotificationMaxOrderByAggregateInput;

    @Field(() => UserNotificationMinOrderByAggregateInput, {nullable:true})
    _min?: UserNotificationMinOrderByAggregateInput;

    @Field(() => UserNotificationSumOrderByAggregateInput, {nullable:true})
    _sum?: UserNotificationSumOrderByAggregateInput;
}
