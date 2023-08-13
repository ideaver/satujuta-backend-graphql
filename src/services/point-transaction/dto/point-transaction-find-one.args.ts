import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { PointTransactionWhereUniqueInput } from 'src/@generated';

@InputType()
export class PointTransactionFindUniqueArgs {
  select?: Prisma.PointTransactionSelect;

    @Field(() => PointTransactionWhereUniqueInput, {nullable:false})
    @Type(() => PointTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
}
