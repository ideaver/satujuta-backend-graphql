import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ProjectWhereInput,
  ProjectOrderByWithRelationInput,
  ProjectScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ProjectFindManyArgs {
  // @Field(() => ProjectSelect, { nullable: true })
  select?: Prisma.ProjectSelect;

  @Field(() => ProjectWhereInput, { nullable: true })
  @Type(() => ProjectWhereInput)
  where?: InstanceType<typeof ProjectWhereInput>;
  @Field(() => [ProjectOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProjectOrderByWithRelationInput>;
  // @Field(() => ProjectWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ProjectScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
