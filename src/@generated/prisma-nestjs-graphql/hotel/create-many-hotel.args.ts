import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelCreateManyInput } from './hotel-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHotelArgs {

    @Field(() => [HotelCreateManyInput], {nullable:false})
    @Type(() => HotelCreateManyInput)
    data!: Array<HotelCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
