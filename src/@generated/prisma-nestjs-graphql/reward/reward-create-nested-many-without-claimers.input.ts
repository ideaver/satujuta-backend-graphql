import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardCreateWithoutClaimersInput } from './reward-create-without-claimers.input';
import { Type } from 'class-transformer';
import { RewardCreateOrConnectWithoutClaimersInput } from './reward-create-or-connect-without-claimers.input';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';

@InputType()
export class RewardCreateNestedManyWithoutClaimersInput {

    @Field(() => [RewardCreateWithoutClaimersInput], {nullable:true})
    @Type(() => RewardCreateWithoutClaimersInput)
    create?: Array<RewardCreateWithoutClaimersInput>;

    @Field(() => [RewardCreateOrConnectWithoutClaimersInput], {nullable:true})
    @Type(() => RewardCreateOrConnectWithoutClaimersInput)
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;

    @Field(() => [RewardWhereUniqueInput], {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;
}
