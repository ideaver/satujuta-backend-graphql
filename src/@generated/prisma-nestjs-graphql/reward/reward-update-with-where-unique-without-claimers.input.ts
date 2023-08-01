import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Type } from 'class-transformer';
import { RewardUpdateWithoutClaimersInput } from './reward-update-without-claimers.input';

@InputType()
export class RewardUpdateWithWhereUniqueWithoutClaimersInput {

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardUpdateWithoutClaimersInput, {nullable:false})
    @Type(() => RewardUpdateWithoutClaimersInput)
    data!: RewardUpdateWithoutClaimersInput;
}
