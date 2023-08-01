import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';

@InputType()
export class HotelListRelationFilter {

    @Field(() => HotelWhereInput, {nullable:true})
    every?: HotelWhereInput;

    @Field(() => HotelWhereInput, {nullable:true})
    some?: HotelWhereInput;

    @Field(() => HotelWhereInput, {nullable:true})
    none?: HotelWhereInput;
}
