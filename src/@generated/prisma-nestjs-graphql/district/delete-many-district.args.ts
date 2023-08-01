import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDistrictArgs {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;
}
