import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClaimedRewardsInput } from './user-create-without-claimed-rewards.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClaimedRewardsInput } from './user-create-or-connect-without-claimed-rewards.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutClaimedRewardsInput {

    @Field(() => [UserCreateWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserCreateWithoutClaimedRewardsInput)
    create?: Array<UserCreateWithoutClaimedRewardsInput>;

    @Field(() => [UserCreateOrConnectWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClaimedRewardsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;
}
