import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelUpdateInput } from './hotel-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';

@ArgsType()
export class UpdateOneHotelArgs {

    @Field(() => HotelUpdateInput, {nullable:false})
    @Type(() => HotelUpdateInput)
    data!: HotelUpdateInput;

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
