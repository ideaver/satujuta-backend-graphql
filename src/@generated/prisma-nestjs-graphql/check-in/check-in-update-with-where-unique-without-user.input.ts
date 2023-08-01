import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';
import { CheckInUpdateWithoutUserInput } from './check-in-update-without-user.input';

@InputType()
export class CheckInUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => CheckInUpdateWithoutUserInput, {nullable:false})
    @Type(() => CheckInUpdateWithoutUserInput)
    data!: CheckInUpdateWithoutUserInput;
}
