import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutClaimedRewardsInput } from './user-update-without-claimed-rewards.input';
import { UserCreateWithoutClaimedRewardsInput } from './user-create-without-claimed-rewards.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutClaimedRewardsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateWithoutClaimedRewardsInput, {nullable:false})
    @Type(() => UserUpdateWithoutClaimedRewardsInput)
    update!: UserUpdateWithoutClaimedRewardsInput;

    @Field(() => UserCreateWithoutClaimedRewardsInput, {nullable:false})
    @Type(() => UserCreateWithoutClaimedRewardsInput)
    create!: UserCreateWithoutClaimedRewardsInput;
}
