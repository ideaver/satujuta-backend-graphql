import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    cityId?: true;

    @Field(() => Boolean, {nullable:true})
    districtId?: true;

    @Field(() => Boolean, {nullable:true})
    postalCodeId?: true;
}
