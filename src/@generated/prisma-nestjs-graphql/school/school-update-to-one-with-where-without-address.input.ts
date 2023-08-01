import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';
import { SchoolUpdateWithoutAddressInput } from './school-update-without-address.input';

@InputType()
export class SchoolUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;

    @Field(() => SchoolUpdateWithoutAddressInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutAddressInput)
    data!: SchoolUpdateWithoutAddressInput;
}
