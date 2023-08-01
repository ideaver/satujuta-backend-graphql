import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictCreateInput } from './district-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDistrictArgs {

    @Field(() => DistrictCreateInput, {nullable:false})
    @Type(() => DistrictCreateInput)
    data!: DistrictCreateInput;
}
