import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ProgramCategoryCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ProgramCategoryCreateArgs {
  select?: Prisma.ProgramCategorySelect;

  @Field(() => ProgramCategoryCreateInput, { nullable: false })
  @Type(() => ProgramCategoryCreateInput)
  data!: ProgramCategoryCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
