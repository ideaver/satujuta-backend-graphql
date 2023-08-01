import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateWithoutCreatedByInput } from './hotel-create-without-created-by.input';
import { Type } from 'class-transformer';
import { HotelCreateOrConnectWithoutCreatedByInput } from './hotel-create-or-connect-without-created-by.input';
import { HotelUpsertWithWhereUniqueWithoutCreatedByInput } from './hotel-upsert-with-where-unique-without-created-by.input';
import { HotelCreateManyCreatedByInputEnvelope } from './hotel-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { HotelUpdateWithWhereUniqueWithoutCreatedByInput } from './hotel-update-with-where-unique-without-created-by.input';
import { HotelUpdateManyWithWhereWithoutCreatedByInput } from './hotel-update-many-with-where-without-created-by.input';
import { HotelScalarWhereInput } from './hotel-scalar-where.input';

@InputType()
export class HotelUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [HotelCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelCreateWithoutCreatedByInput)
    create?: Array<HotelCreateWithoutCreatedByInput>;

    @Field(() => [HotelCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<HotelCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [HotelUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<HotelUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => HotelCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => HotelCreateManyCreatedByInputEnvelope)
    createMany?: HotelCreateManyCreatedByInputEnvelope;

    @Field(() => [HotelWhereUniqueInput], {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;

    @Field(() => [HotelWhereUniqueInput], {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;

    @Field(() => [HotelWhereUniqueInput], {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;

    @Field(() => [HotelWhereUniqueInput], {nullable:true})
    @Type(() => HotelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>>;

    @Field(() => [HotelUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<HotelUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [HotelUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => HotelUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<HotelUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [HotelScalarWhereInput], {nullable:true})
    @Type(() => HotelScalarWhereInput)
    deleteMany?: Array<HotelScalarWhereInput>;
}
