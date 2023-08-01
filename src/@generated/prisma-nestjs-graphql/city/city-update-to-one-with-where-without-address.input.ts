import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { CityUpdateWithoutAddressInput } from './city-update-without-address.input';

@InputType()
export class CityUpdateToOneWithWhereWithoutAddressInput {

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;

    @Field(() => CityUpdateWithoutAddressInput, {nullable:false})
    @Type(() => CityUpdateWithoutAddressInput)
    data!: CityUpdateWithoutAddressInput;
}
