import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AccountCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class AccountCreateArgs {
  select?: Prisma.AccountSelect;

  @Field(() => AccountCreateInput, { nullable: false })
  @Type(() => AccountCreateInput)
  data!: AccountCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
