import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AddressAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    cityId?: number;

    @Field(() => Float, {nullable:true})
    districtId?: number;

    @Field(() => Float, {nullable:true})
    postalCodeId?: number;
}
