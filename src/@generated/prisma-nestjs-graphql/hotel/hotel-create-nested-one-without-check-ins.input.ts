import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutCheckInsInput } from './hotel-create-without-check-ins.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutCheckInsInput } from './hotel-create-or-connect-without-check-ins.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';

@InputType()
export class HotelCreateNestedOneWithoutCheckInsInput {

    @Field(() => HotelCreateWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelCreateWithoutCheckInsInput)
    create?: HotelCreateWithoutCheckInsInput;

    @Field(() => HotelCreateOrConnectWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutCheckInsInput)
    connectOrCreate?: HotelCreateOrConnectWithoutCheckInsInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
