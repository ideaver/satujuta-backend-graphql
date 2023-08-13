import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { TransactionWhereUniqueInput } from 'src/@generated';

@InputType()
export class TransactionFindUniqueArgs {
  select?: Prisma.TransactionSelect;

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
