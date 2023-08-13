import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CheckInWhereUniqueInput } from 'src/@generated';

@InputType()
export class CheckInFindUniqueArgs {
  select?: Prisma.CheckInSelect;

    @Field(() => CheckInWhereUniqueInput, {nullable:false})
    @Type(() => CheckInWhereUniqueInput)
    where!: Prisma.AtLeast<CheckInWhereUniqueInput, 'id'>;
}
