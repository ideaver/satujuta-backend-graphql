import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @HideField()
    addressId?: true;

    @HideField()
    schoolId?: true;
}
