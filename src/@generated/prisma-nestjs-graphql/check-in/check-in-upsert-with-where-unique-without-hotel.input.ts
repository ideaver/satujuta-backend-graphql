import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';
import { CheckInUpdateWithoutHotelInput } from './check-in-update-without-hotel.input';
import { CheckInCreateWithoutHotelInput } from './check-in-create-without-hotel.input';

@InputType()
export class CheckInUpsertWithWhereUniqueWithoutHotelInput {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => CheckInUpdateWithoutHotelInput, {nullable:false})
    @Type(() => CheckInUpdateWithoutHotelInput)
    update!: CheckInUpdateWithoutHotelInput;

    @Field(() => CheckInCreateWithoutHotelInput, {nullable:false})
    @Type(() => CheckInCreateWithoutHotelInput)
    create!: CheckInCreateWithoutHotelInput;
}
