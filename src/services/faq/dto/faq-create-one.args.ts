import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { FaqCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class FaqCreateArgs {
  select?: Prisma.FaqSelect;

  @Field(() => FaqCreateInput, { nullable: false })
  @Type(() => FaqCreateInput)
  data!: FaqCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
