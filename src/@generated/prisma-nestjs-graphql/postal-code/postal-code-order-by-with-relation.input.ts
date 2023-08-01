import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressOrderByRelationAggregateInput } from '../address/address-order-by-relation-aggregate.input';

@InputType()
export class PostalCodeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => AddressOrderByRelationAggregateInput, {nullable:true})
    address?: AddressOrderByRelationAggregateInput;
}
