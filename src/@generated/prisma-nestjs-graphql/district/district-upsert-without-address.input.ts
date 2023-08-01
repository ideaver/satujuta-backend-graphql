import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictUpdateWithoutAddressInput } from './district-update-without-address.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutAddressInput } from './district-create-without-address.input';
import { DistrictWhereInput } from './district-where.input';

@InputType()
export class DistrictUpsertWithoutAddressInput {

    @Field(() => DistrictUpdateWithoutAddressInput, {nullable:false})
    @Type(() => DistrictUpdateWithoutAddressInput)
    update!: DistrictUpdateWithoutAddressInput;

    @Field(() => DistrictCreateWithoutAddressInput, {nullable:false})
    @Type(() => DistrictCreateWithoutAddressInput)
    create!: DistrictCreateWithoutAddressInput;

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;
}
