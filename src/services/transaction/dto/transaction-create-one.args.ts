import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { TransactionCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class TransactionCreateArgs {
  select?: Prisma.TransactionSelect;

  @Field(() => TransactionCreateInput, { nullable: false })
  @Type(() => TransactionCreateInput)
  data!: TransactionCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
