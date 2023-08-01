import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutCreatedByInput } from './hotel-create-without-created-by.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutCreatedByInput } from './hotel-create-or-connect-without-created-by.input';
import { HotelCreateManyCreatedByInputEnvelope } from './hotel-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';

@InputType()
export class HotelUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [HotelCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelCreateWithoutCreatedByInput)
    create?: Array<HotelCreateWithoutCreatedByInput>;

    @Field(() => [HotelCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;

    @Field(() => HotelCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => HotelCreateManyCreatedByInputEnvelope)
    createMany?: HotelCreateManyCreatedByInputEnvelope;

    @Field(() => [HotelWhereUniqueInput], {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;
}
