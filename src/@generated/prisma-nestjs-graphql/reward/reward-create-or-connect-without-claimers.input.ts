import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Type } from 'class-transformer';
import { RewardCreateWithoutClaimersInput } from './reward-create-without-claimers.input';

@InputType()
export class RewardCreateOrConnectWithoutClaimersInput {

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardCreateWithoutClaimersInput, {nullable:false})
    @Type(() => RewardCreateWithoutClaimersInput)
    create!: RewardCreateWithoutClaimersInput;
}
