import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutAddressInput } from './school-update-without-address.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutAddressInput } from './school-create-without-address.input';
import { SchoolWhereInput } from './school-where.input';

@InputType()
export class SchoolUpsertWithoutAddressInput {

    @Field(() => SchoolUpdateWithoutAddressInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutAddressInput)
    update!: SchoolUpdateWithoutAddressInput;

    @Field(() => SchoolCreateWithoutAddressInput, {nullable:false})
    @Type(() => SchoolCreateWithoutAddressInput)
    create!: SchoolCreateWithoutAddressInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;
}
