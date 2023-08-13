import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ProgramCategoryWhereInput,
  ProgramCategoryOrderByWithRelationInput,
  ProgramCategoryWhereUniqueInput,
  ProgramCategoryScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ProgramCategoryFindManyArgs {
  // @Field(() => ProgramCategorySelect, { nullable: true })
  select?: Prisma.ProgramCategorySelect;

  @Field(() => ProgramCategoryWhereInput, {nullable:true})
  @Type(() => ProgramCategoryWhereInput)
  where?: InstanceType<typeof ProgramCategoryWhereInput>;
  @Field(() => [ProgramCategoryOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<ProgramCategoryOrderByWithRelationInput>;
  // @Field(() => ProgramCategoryWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<ProgramCategoryWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [ProgramCategoryScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof ProgramCategoryScalarFieldEnum>;
}
