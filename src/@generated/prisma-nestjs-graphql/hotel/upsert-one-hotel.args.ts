import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelCreateInput } from './hotel-create.input';
import { HotelUpdateInput } from './hotel-update.input';

@ArgsType()
export class UpsertOneHotelArgs {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelCreateInput, {nullable:false})
    @Type(() => HotelCreateInput)
    create!: HotelCreateInput;

    @Field(() => HotelUpdateInput, {nullable:false})
    @Type(() => HotelUpdateInput)
    update!: HotelUpdateInput;
}
