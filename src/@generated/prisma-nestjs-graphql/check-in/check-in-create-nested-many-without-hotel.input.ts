import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateWithoutHotelInput } from './check-in-create-without-hotel.input';
import { Type } from 'class-transformer';
import { CheckInCreateOrConnectWithoutHotelInput } from './check-in-create-or-connect-without-hotel.input';
import { CheckInCreateManyHotelInputEnvelope } from './check-in-create-many-hotel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';

@InputType()
export class CheckInCreateNestedManyWithoutHotelInput {

    @Field(() => [CheckInCreateWithoutHotelInput], {nullable:true})
    @Type(() => CheckInCreateWithoutHotelInput)
    create?: Array<CheckInCreateWithoutHotelInput>;

    @Field(() => [CheckInCreateOrConnectWithoutHotelInput], {nullable:true})
    @Type(() => CheckInCreateOrConnectWithoutHotelInput)
    connectOrCreate?: Array<CheckInCreateOrConnectWithoutHotelInput>;

    @Field(() => CheckInCreateManyHotelInputEnvelope, {nullable:true})
    @Type(() => CheckInCreateManyHotelInputEnvelope)
    createMany?: CheckInCreateManyHotelInputEnvelope;

    @Field(() => [CheckInWhereUniqueInput], {nullable:true})
    @Type(() => CheckInWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>>;
}
