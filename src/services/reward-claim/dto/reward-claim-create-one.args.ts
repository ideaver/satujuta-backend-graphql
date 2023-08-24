import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { RewardClaimCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class RewardClaimCreateArgs {
  select?: Prisma.RewardClaimSelect;

  @Field(() => RewardClaimCreateInput, { nullable: false })
  @Type(() => RewardClaimCreateInput)
  data!: RewardClaimCreateInput;
}
