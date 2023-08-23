import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { BankWhereUniqueInput } from 'src/@generated';

@InputType()
export class BankFindUniqueArgs {
  select?: Prisma.BankSelect;

  @Field(() => BankWhereUniqueInput, { nullable: false })
  @Type(() => BankWhereUniqueInput)
  where!: Prisma.AtLeast<BankWhereUniqueInput, 'id'>;
}
