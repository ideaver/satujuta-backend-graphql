import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { RewardCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class RewardCreateArgs {
  select?: Prisma.RewardSelect;

  @Field(() => RewardCreateInput, { nullable: false })
  @Type(() => RewardCreateInput)
  data!: RewardCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
