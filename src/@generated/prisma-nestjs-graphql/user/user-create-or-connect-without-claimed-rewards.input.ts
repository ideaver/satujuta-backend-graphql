import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClaimedRewardsInput } from './user-create-without-claimed-rewards.input';

@InputType()
export class UserCreateOrConnectWithoutClaimedRewardsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutClaimedRewardsInput, {nullable:false})
    @Type(() => UserCreateWithoutClaimedRewardsInput)
    create!: UserCreateWithoutClaimedRewardsInput;
}
