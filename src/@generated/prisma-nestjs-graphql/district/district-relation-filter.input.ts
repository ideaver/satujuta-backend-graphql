import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';

@InputType()
export class DistrictRelationFilter {

    @Field(() => DistrictWhereInput, {nullable:true})
    is?: DistrictWhereInput;

    @Field(() => DistrictWhereInput, {nullable:true})
    isNot?: DistrictWhereInput;
}
