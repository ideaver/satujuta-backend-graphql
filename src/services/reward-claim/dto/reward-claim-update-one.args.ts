import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import {
  RewardClaimUpdateInput,
  RewardClaimWhereUniqueInput,
} from 'src/@generated';

@InputType()
export class RewardClaimUpdateOneArgs {
  select?: Prisma.RewardClaimSelect;

  @Field(() => RewardClaimUpdateInput, { nullable: false })
  @Type(() => RewardClaimUpdateInput)
  data!: InstanceType<typeof RewardClaimUpdateInput>;
  @Field(() => RewardClaimWhereUniqueInput, { nullable: false })
  @Type(() => RewardClaimWhereUniqueInput)
  where!: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
