import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SchoolCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class SchoolCreateArgs {
  select?: Prisma.SchoolSelect;

  @Field(() => SchoolCreateInput, { nullable: false })
  @Type(() => SchoolCreateInput)
  data!: SchoolCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
