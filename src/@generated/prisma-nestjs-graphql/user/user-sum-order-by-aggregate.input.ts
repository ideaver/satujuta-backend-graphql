import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserSumOrderByAggregateInput {

    @HideField()
    addressId?: keyof typeof SortOrder;

    @HideField()
    schoolId?: keyof typeof SortOrder;
}
