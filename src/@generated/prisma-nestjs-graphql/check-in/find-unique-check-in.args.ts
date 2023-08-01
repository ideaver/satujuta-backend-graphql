import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCheckInArgs {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
