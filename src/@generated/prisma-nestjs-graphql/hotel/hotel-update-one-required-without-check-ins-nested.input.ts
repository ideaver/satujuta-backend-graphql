import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutCheckInsInput } from './hotel-create-without-check-ins.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutCheckInsInput } from './hotel-create-or-connect-without-check-ins.input';
import { HotelUpsertWithoutCheckInsInput } from './hotel-upsert-without-check-ins.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { HotelUpdateToOneWithWhereWithoutCheckInsInput } from './hotel-update-to-one-with-where-without-check-ins.input';

@InputType()
export class HotelUpdateOneRequiredWithoutCheckInsNestedInput {

    @Field(() => HotelCreateWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelCreateWithoutCheckInsInput)
    create?: HotelCreateWithoutCheckInsInput;

    @Field(() => HotelCreateOrConnectWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutCheckInsInput)
    connectOrCreate?: HotelCreateOrConnectWithoutCheckInsInput;

    @Field(() => HotelUpsertWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelUpsertWithoutCheckInsInput)
    upsert?: HotelUpsertWithoutCheckInsInput;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => HotelUpdateToOneWithWhereWithoutCheckInsInput, {nullable:true})
    @Type(() => HotelUpdateToOneWithWhereWithoutCheckInsInput)
    update?: HotelUpdateToOneWithWhereWithoutCheckInsInput;
}
