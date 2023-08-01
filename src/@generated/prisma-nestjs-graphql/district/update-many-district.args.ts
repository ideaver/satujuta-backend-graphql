import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictUpdateManyMutationInput } from './district-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DistrictWhereInput } from './district-where.input';

@ArgsType()
export class UpdateManyDistrictArgs {

    @Field(() => DistrictUpdateManyMutationInput, {nullable:false})
    @Type(() => DistrictUpdateManyMutationInput)
    data!: DistrictUpdateManyMutationInput;

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;
}
