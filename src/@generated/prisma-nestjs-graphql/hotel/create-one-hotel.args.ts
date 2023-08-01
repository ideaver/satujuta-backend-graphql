import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelCreateInput } from './hotel-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHotelArgs {

    @Field(() => HotelCreateInput, {nullable:false})
    @Type(() => HotelCreateInput)
    data!: HotelCreateInput;
}
