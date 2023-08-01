import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutSchoolInput } from './address-update-without-school.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutSchoolInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => AddressUpdateWithoutSchoolInput)
    data!: AddressUpdateWithoutSchoolInput;
}
