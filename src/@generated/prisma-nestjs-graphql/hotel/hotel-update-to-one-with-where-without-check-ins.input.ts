import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelUpdateWithoutCheckInsInput } from './hotel-update-without-check-ins.input';

@InputType()
export class HotelUpdateToOneWithWhereWithoutCheckInsInput {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => HotelUpdateWithoutCheckInsInput, {nullable:false})
    @Type(() => HotelUpdateWithoutCheckInsInput)
    data!: HotelUpdateWithoutCheckInsInput;
}
