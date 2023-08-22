import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ProjectWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProjectFindUniqueArgs {
  select?: Prisma.ProjectSelect;

  @Field(() => ProjectWhereUniqueInput, { nullable: false })
  @Type(() => ProjectWhereUniqueInput)
  where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
