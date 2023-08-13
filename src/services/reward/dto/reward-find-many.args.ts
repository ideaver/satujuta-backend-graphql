import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  RewardWhereInput,
  RewardOrderByWithRelationInput,
  RewardWhereUniqueInput,
  RewardScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class RewardFindManyArgs {
  // @Field(() => RewardSelect, { nullable: true })
  select?: Prisma.RewardSelect;

  @Field(() => RewardWhereInput, {nullable:true})
  @Type(() => RewardWhereInput)
  where?: InstanceType<typeof RewardWhereInput>;
  @Field(() => [RewardOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<RewardOrderByWithRelationInput>;
  // @Field(() => RewardWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [RewardScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
