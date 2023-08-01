import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CheckInUpdateInput } from './check-in-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';

@ArgsType()
export class UpdateOneCheckInArgs {

    @Field(() => CheckInUpdateInput, {nullable:false})
    @Type(() => CheckInUpdateInput)
    data!: CheckInUpdateInput;

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
