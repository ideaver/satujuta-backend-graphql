import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { RewardWhereUniqueInput } from 'src/@generated';

@InputType()
export class RewardFindUniqueArgs {
  select?: Prisma.RewardSelect;

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
