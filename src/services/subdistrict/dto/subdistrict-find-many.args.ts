import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  SubdistrictWhereInput,
  SubdistrictOrderByWithRelationInput,
  SubdistrictWhereUniqueInput,
  SubdistrictScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class SubdistrictFindManyArgs {
  // @Field(() => SubdistrictSelect, { nullable: true })
  select?: Prisma.SubdistrictSelect;

  @Field(() => SubdistrictWhereInput, { nullable: true })
  @Type(() => SubdistrictWhereInput)
  where?: InstanceType<typeof SubdistrictWhereInput>;
  @Field(() => [SubdistrictOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SubdistrictOrderByWithRelationInput>;
  // @Field(() => SubdistrictWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [SubdistrictScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
