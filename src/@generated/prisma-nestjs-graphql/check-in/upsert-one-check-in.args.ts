import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CheckInWhereUniqueInput } from './check-in-where-unique.input';
import { Type } from 'class-transformer';
import { CheckInCreateInput } from './check-in-create.input';
import { CheckInUpdateInput } from './check-in-update.input';

@ArgsType()
export class UpsertOneCheckInArgs {

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;

    @Field(() => CheckInCreateInput, {nullable:false})
    @Type(() => CheckInCreateInput)
    create!: CheckInCreateInput;

    @Field(() => CheckInUpdateInput, {nullable:false})
    @Type(() => CheckInUpdateInput)
    update!: CheckInUpdateInput;
}
