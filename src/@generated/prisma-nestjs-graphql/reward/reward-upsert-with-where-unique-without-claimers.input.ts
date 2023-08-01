import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Type } from 'class-transformer';
import { RewardUpdateWithoutClaimersInput } from './reward-update-without-claimers.input';
import { RewardCreateWithoutClaimersInput } from './reward-create-without-claimers.input';

@InputType()
export class RewardUpsertWithWhereUniqueWithoutClaimersInput {

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardUpdateWithoutClaimersInput, {nullable:false})
    @Type(() => RewardUpdateWithoutClaimersInput)
    update!: RewardUpdateWithoutClaimersInput;

    @Field(() => RewardCreateWithoutClaimersInput, {nullable:false})
    @Type(() => RewardCreateWithoutClaimersInput)
    create!: RewardCreateWithoutClaimersInput;
}
