import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Type } from 'class-transformer';
import { HotelCreateWithoutCheckInsInput } from './hotel-create-without-check-ins.input';

@InputType()
export class HotelCreateOrConnectWithoutCheckInsInput {

    @Field(() => HotelWhereUniqueInput, {nullable:false})
    @Type(() => HotelWhereUniqueInput)
    where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelCreateWithoutCheckInsInput, {nullable:false})
    @Type(() => HotelCreateWithoutCheckInsInput)
    create!: HotelCreateWithoutCheckInsInput;
}
