import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectUpdateInput, ProjectWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProjectUpdateOneArgs {
  select?: Prisma.ProjectSelect;

  @Field(() => ProjectUpdateInput, { nullable: false })
  @Type(() => ProjectUpdateInput)
  data!: InstanceType<typeof ProjectUpdateInput>;
  @Field(() => ProjectWhereUniqueInput, { nullable: false })
  @Type(() => ProjectWhereUniqueInput)
  where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
