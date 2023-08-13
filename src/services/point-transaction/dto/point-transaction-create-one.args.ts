import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PointTransactionCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class PointTransactionCreateArgs {
  select?: Prisma.PointTransactionSelect;

  @Field(() => PointTransactionCreateInput, { nullable: false })
  @Type(() => PointTransactionCreateInput)
  data!: PointTransactionCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
