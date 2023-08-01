import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImagesOrderByRelationAggregateInput } from '../images/images-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input';

@InputType()
export class ProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectCategory?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnRate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimumInvestment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxInvestor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ImagesOrderByRelationAggregateInput, {nullable:true})
    images?: ImagesOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    investors?: UserOrderByRelationAggregateInput;

    @Field(() => AccountOrderByWithRelationInput, {nullable:true})
    account?: AccountOrderByWithRelationInput;
}
