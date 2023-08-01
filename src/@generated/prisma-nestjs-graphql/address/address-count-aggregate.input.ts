import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    cityId?: true;

    @Field(() => Boolean, {nullable:true})
    districtId?: true;

    @Field(() => Boolean, {nullable:true})
    postalCodeId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
