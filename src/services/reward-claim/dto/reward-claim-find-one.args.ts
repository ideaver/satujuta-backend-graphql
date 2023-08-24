import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { RewardClaimWhereUniqueInput } from 'src/@generated';

@InputType()
export class RewardClaimFindUniqueArgs {
  select?: Prisma.RewardClaimSelect;

  @Field(() => RewardClaimWhereUniqueInput, { nullable: false })
  @Type(() => RewardClaimWhereUniqueInput)
  where!: Prisma.AtLeast<RewardClaimWhereUniqueInput, 'id'>;
}
