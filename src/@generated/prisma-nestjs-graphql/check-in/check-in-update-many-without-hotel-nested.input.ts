import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateWithoutHotelInput } from './check-in-create-without-hotel.input';
import { Type } from 'class-transformer';
import { CheckInCreateOrConnectWithoutHotelInput } from './check-in-create-or-connect-without-hotel.input';
import { CheckInUpsertWithWhereUniqueWithoutHotelInput } from './check-in-upsert-with-where-unique-without-hotel.input';
import { CheckInCreateManyHotelInputEnvelope } from './check-in-create-many-hotel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { CheckInUpdateWithWhereUniqueWithoutHotelInput } from './check-in-update-with-where-unique-without-hotel.input';
import { CheckInUpdateManyWithWhereWithoutHotelInput } from './check-in-update-many-with-where-without-hotel.input';
import { CheckInScalarWhereInput } from './check-in-scalar-where.input';

@InputType()
export class CheckInUpdateManyWithoutHotelNestedInput {

    @Field(() => [CheckInCreateWithoutHotelInput], {nullable:true})
    @Type(() => CheckInCreateWithoutHotelInput)
    create?: Array<CheckInCreateWithoutHotelInput>;

    @Field(() => [CheckInCreateOrConnectWithoutHotelInput], {nullable:true})
    @Type(() => CheckInCreateOrConnectWithoutHotelInput)
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;

    @Field(() => [CheckInUpsertWithWhereUniqueWithoutHotelInput], {nullable:true})
    @Type(() => CheckInUpsertWithWhereUniqueWithoutHotelInput)
    upsert?: Array<CheckInUpsertWithWhereUniqueWithoutHotelInput>;

    @Field(() => CheckInCreateManyHotelInputEnvelope, {nullable:true})
    @Type(() => CheckInCreateManyHotelInputEnvelope)
    createMany?: CheckInCreateManyHotelInputEnvelope;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;

    @Field(() => [CheckInUpdateWithWhereUniqueWithoutHotelInput], {nullable:true})
    @Type(() => CheckInUpdateWithWhereUniqueWithoutHotelInput)
    update?: Array<CheckInUpdateWithWhereUniqueWithoutHotelInput>;

    @Field(() => [CheckInUpdateManyWithWhereWithoutHotelInput], {nullable:true})
    @Type(() => CheckInUpdateManyWithWhereWithoutHotelInput)
    updateMany?: Array<CheckInUpdateManyWithWhereWithoutHotelInput>;

    @Field(() => [CheckInScalarWhereInput], {nullable:true})
    @Type(() => CheckInScalarWhereInput)
    deleteMany?: Array<CheckInScalarWhereInput>;
}
