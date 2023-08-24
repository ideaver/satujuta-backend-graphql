import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  RewardClaimWhereInput,
  RewardClaimOrderByWithRelationInput,
  RewardClaimWhereUniqueInput,
  RewardClaimScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class RewardClaimFindManyArgs {
  // @Field(() => RewardClaimSelect, { nullable: true })
  select?: Prisma.RewardClaimSelect;

  @Field(() => RewardClaimWhereInput, { nullable: true })
  @Type(() => RewardClaimWhereInput)
  where?: InstanceType<typeof RewardClaimWhereInput>;
  @Field(() => [RewardClaimOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RewardClaimOrderByWithRelationInput>;
  // @Field(() => RewardClaimWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [RewardClaimScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RewardClaimScalarFieldEnum>;
}
