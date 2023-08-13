import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  TransactionWhereInput,
  TransactionOrderByWithRelationInput,
  TransactionWhereUniqueInput,
  TransactionScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class TransactionFindManyArgs {
  // @Field(() => TransactionSelect, { nullable: true })
  select?: Prisma.TransactionSelect;

  @Field(() => TransactionWhereInput, {nullable:true})
  @Type(() => TransactionWhereInput)
  where?: InstanceType<typeof TransactionWhereInput>;
  @Field(() => [TransactionOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<TransactionOrderByWithRelationInput>;
  // @Field(() => TransactionWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [TransactionScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
