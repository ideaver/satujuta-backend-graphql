import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardCreateWithoutClaimersInput } from './reward-create-without-claimers.input';
import { Type } from 'class-transformer';
import { RewardCreateOrConnectWithoutClaimersInput } from './reward-create-or-connect-without-claimers.input';
import { RewardUpsertWithWhereUniqueWithoutClaimersInput } from './reward-upsert-with-where-unique-without-claimers.input';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { RewardUpdateWithWhereUniqueWithoutClaimersInput } from './reward-update-with-where-unique-without-claimers.input';
import { RewardUpdateManyWithWhereWithoutClaimersInput } from './reward-update-many-with-where-without-claimers.input';
import { RewardScalarWhereInput } from './reward-scalar-where.input';

@InputType()
export class RewardUpdateManyWithoutClaimersNestedInput {

    @Field(() => [RewardCreateWithoutClaimersInput], {nullable:true})
    @Type(() => RewardCreateWithoutClaimersInput)
    create?: Array<RewardCreateWithoutClaimersInput>;

    @Field(() => [RewardCreateOrConnectWithoutClaimersInput], {nullable:true})
    @Type(() => RewardCreateOrConnectWithoutClaimersInput)
    connectOrCreate?: Array<RewardCreateOrConnectWithoutClaimersInput>;

    @Field(() => [RewardUpsertWithWhereUniqueWithoutClaimersInput], {nullable:true})
    @Type(() => RewardUpsertWithWhereUniqueWithoutClaimersInput)
    upsert?: Array<RewardUpsertWithWhereUniqueWithoutClaimersInput>;

    @Field(() => [RewardWhereUniqueInput], {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;

    @Field(() => [RewardWhereUniqueInput], {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;

    @Field(() => [RewardWhereUniqueInput], {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;

    @Field(() => [RewardWhereUniqueInput], {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RewardWhereUniqueInput, 'id'>>;

    @Field(() => [RewardUpdateWithWhereUniqueWithoutClaimersInput], {nullable:true})
    @Type(() => RewardUpdateWithWhereUniqueWithoutClaimersInput)
    update?: Array<RewardUpdateWithWhereUniqueWithoutClaimersInput>;

    @Field(() => [RewardUpdateManyWithWhereWithoutClaimersInput], {nullable:true})
    @Type(() => RewardUpdateManyWithWhereWithoutClaimersInput)
    updateMany?: Array<RewardUpdateManyWithWhereWithoutClaimersInput>;

    @Field(() => [RewardScalarWhereInput], {nullable:true})
    @Type(() => RewardScalarWhereInput)
    deleteMany?: Array<RewardScalarWhereInput>;
}
