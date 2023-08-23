import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BankUpdateInput, BankWhereUniqueInput } from 'src/@generated';

@InputType()
export class BankUpdateOneArgs {
  select?: Prisma.BankSelect;

  @Field(() => BankUpdateInput, { nullable: false })
  @Type(() => BankUpdateInput)
  data!: InstanceType<typeof BankUpdateInput>;
  @Field(() => BankWhereUniqueInput, { nullable: false })
  @Type(() => BankWhereUniqueInput)
  where!: Prisma.AtLeast<BankWhereUniqueInput, 'id'>;
}
