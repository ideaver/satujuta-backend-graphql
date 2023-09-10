import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  PointTransactionWhereInput,
  PointTransactionOrderByWithRelationInput,
  PointTransactionScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class PointTransactionFindFirstArgs {
  select?: Prisma.PointTransactionSelect;
  @Field(() => PointTransactionWhereInput, { nullable: true })
  @Type(() => PointTransactionWhereInput)
  where?: InstanceType<typeof PointTransactionWhereInput>;
  @Field(() => [PointTransactionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PointTransactionOrderByWithRelationInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PointTransactionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PointTransactionScalarFieldEnum>;
}
