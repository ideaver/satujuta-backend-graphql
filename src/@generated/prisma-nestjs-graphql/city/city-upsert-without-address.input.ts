import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutAddressInput } from './city-update-without-address.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutAddressInput } from './city-create-without-address.input';
import { CityWhereInput } from './city-where.input';

@InputType()
export class CityUpsertWithoutAddressInput {

    @Field(() => CityUpdateWithoutAddressInput, {nullable:false})
    @Type(() => CityUpdateWithoutAddressInput)
    update!: CityUpdateWithoutAddressInput;

    @Field(() => CityCreateWithoutAddressInput, {nullable:false})
    @Type(() => CityCreateWithoutAddressInput)
    create!: CityCreateWithoutAddressInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;
}
