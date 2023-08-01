import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { Type } from 'class-transformer';
import { DistrictUpdateWithoutAddressInput } from './district-update-without-address.input';

@InputType()
export class DistrictUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;

    @Field(() => DistrictUpdateWithoutAddressInput, {nullable:false})
    @Type(() => DistrictUpdateWithoutAddressInput)
    data!: DistrictUpdateWithoutAddressInput;
}
