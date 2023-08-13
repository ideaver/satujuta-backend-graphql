import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  SchoolWhereInput,
  SchoolOrderByWithRelationInput,
  SchoolWhereUniqueInput,
  SchoolScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class SchoolFindManyArgs {
  // @Field(() => SchoolSelect, { nullable: true })
  select?: Prisma.SchoolSelect;

  @Field(() => SchoolWhereInput, {nullable:true})
  @Type(() => SchoolWhereInput)
  where?: InstanceType<typeof SchoolWhereInput>;
  @Field(() => [SchoolOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<SchoolOrderByWithRelationInput>;
  // @Field(() => SchoolWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [SchoolScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
