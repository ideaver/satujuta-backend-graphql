import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelUpdateWithoutCheckInsInput } from './hotel-update-without-check-ins.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutCheckInsInput } from './hotel-create-without-check-ins.input';
import { HotelWhereInput } from './hotel-where.input';

@InputType()
export class HotelUpsertWithoutCheckInsInput {

    @Field(() => HotelUpdateWithoutCheckInsInput, {nullable:false})
    @Type(() => HotelUpdateWithoutCheckInsInput)
    update!: HotelUpdateWithoutCheckInsInput;

    @Field(() => HotelCreateWithoutCheckInsInput, {nullable:false})
    @Type(() => HotelCreateWithoutCheckInsInput)
    create!: HotelCreateWithoutCheckInsInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;
}
