import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ProjectCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ProjectCreateArgs {
  select?: Prisma.ProjectSelect;

  @Field(() => ProjectCreateInput, { nullable: false })
  @Type(() => ProjectCreateInput)
  data!: ProjectCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
