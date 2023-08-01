import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';

@InputType()
export class HotelRelationFilter {

    @Field(() => HotelWhereInput, {nullable:true})
    is?: HotelWhereInput;

    @Field(() => HotelWhereInput, {nullable:true})
    isNot?: HotelWhereInput;
}
