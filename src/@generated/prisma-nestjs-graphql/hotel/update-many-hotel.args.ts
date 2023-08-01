import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelUpdateManyMutationInput } from './hotel-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HotelWhereInput } from './hotel-where.input';

@ArgsType()
export class UpdateManyHotelArgs {

    @Field(() => HotelUpdateManyMutationInput, {nullable:false})
    @Type(() => HotelUpdateManyMutationInput)
    data!: HotelUpdateManyMutationInput;

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;
}
