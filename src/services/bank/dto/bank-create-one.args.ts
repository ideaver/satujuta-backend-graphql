import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BankCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class BankCreateArgs {
  select?: Prisma.BankSelect;

  @Field(() => BankCreateInput, { nullable: false })
  @Type(() => BankCreateInput)
  data!: BankCreateInput;
}
