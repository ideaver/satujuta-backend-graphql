import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';

@InputType()
export class CityRelationFilter {

    @Field(() => CityWhereInput, {nullable:true})
    is?: CityWhereInput;

    @Field(() => CityWhereInput, {nullable:true})
    isNot?: CityWhereInput;
}
