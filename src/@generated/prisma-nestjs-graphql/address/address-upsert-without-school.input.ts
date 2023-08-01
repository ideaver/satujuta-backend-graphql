import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutSchoolInput } from './address-update-without-school.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutSchoolInput } from './address-create-without-school.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutSchoolInput {

    @Field(() => AddressUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => AddressUpdateWithoutSchoolInput)
    update!: AddressUpdateWithoutSchoolInput;

    @Field(() => AddressCreateWithoutSchoolInput, {nullable:false})
    @Type(() => AddressCreateWithoutSchoolInput)
    create!: AddressCreateWithoutSchoolInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
