import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';
import { CheckInUpdateWithoutHotelInput } from './check-in-update-without-hotel.input';

@InputType()
export class CheckInUpdateWithWhereUniqueWithoutHotelInput {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => CheckInUpdateWithoutHotelInput, {nullable:false})
    @Type(() => CheckInUpdateWithoutHotelInput)
    data!: CheckInUpdateWithoutHotelInput;
}
