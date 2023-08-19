import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { InvoiceCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class InvoiceCreateArgs {
  select?: Prisma.InvoiceSelect | null;

  @Field(() => InvoiceCreateInput, { nullable: false })
  @Type(() => InvoiceCreateInput)
  data!: InvoiceCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
