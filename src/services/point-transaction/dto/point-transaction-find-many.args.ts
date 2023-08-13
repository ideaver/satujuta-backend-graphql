import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  PointTransactionWhereInput,
  PointTransactionOrderByWithRelationInput,
  PointTransactionWhereUniqueInput,
  PointTransactionScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class PointTransactionFindManyArgs {
  // @Field(() => PointTransactionSelect, { nullable: true })
  select?: Prisma.PointTransactionSelect;

  @Field(() => PointTransactionWhereInput, {nullable:true})
  @Type(() => PointTransactionWhereInput)
  where?: InstanceType<typeof PointTransactionWhereInput>;
  @Field(() => [PointTransactionOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<PointTransactionOrderByWithRelationInput>;
  // @Field(() => PointTransactionWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<PointTransactionWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [PointTransactionScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
