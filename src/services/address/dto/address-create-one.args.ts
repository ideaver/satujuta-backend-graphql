import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AddressCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class AddressCreateArgs {
  select?: Prisma.AddressSelect;

  @Field(() => AddressCreateInput, { nullable: false })
  @Type(() => AddressCreateInput)
  data!: AddressCreateInput;
}
