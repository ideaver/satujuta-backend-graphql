import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHotelArgs {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
