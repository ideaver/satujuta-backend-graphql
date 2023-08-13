import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ProgramCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ProgramCreateArgs {
  select?: Prisma.ProgramSelect;

  @Field(() => ProgramCreateInput, { nullable: false })
  @Type(() => ProgramCreateInput)
  data!: ProgramCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
