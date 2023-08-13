import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CheckInUpdateInput, CheckInWhereUniqueInput } from 'src/@generated';

@InputType()
export class CheckInUpdateOneArgs {

    select?: Prisma.CheckInSelect;

    @Field(() => CheckInUpdateInput, {nullable:false})
    @Type(() => CheckInUpdateInput)
    data!: InstanceType<typeof CheckInUpdateInput>;
    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
