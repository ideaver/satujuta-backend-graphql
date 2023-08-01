import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';
import { CheckInCreateWithoutHotelInput } from './check-in-create-without-hotel.input';

@InputType()
export class CheckInCreateOrConnectWithoutHotelInput {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => CheckInCreateWithoutHotelInput, {nullable:false})
    @Type(() => CheckInCreateWithoutHotelInput)
    create!: CheckInCreateWithoutHotelInput;
}
