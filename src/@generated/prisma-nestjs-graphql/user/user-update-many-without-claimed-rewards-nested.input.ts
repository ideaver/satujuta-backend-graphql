import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClaimedRewardsInput } from './user-create-without-claimed-rewards.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClaimedRewardsInput } from './user-create-or-connect-without-claimed-rewards.input';
import { UserUpsertWithWhereUniqueWithoutClaimedRewardsInput } from './user-upsert-with-where-unique-without-claimed-rewards.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutClaimedRewardsInput } from './user-update-with-where-unique-without-claimed-rewards.input';
import { UserUpdateManyWithWhereWithoutClaimedRewardsInput } from './user-update-many-with-where-without-claimed-rewards.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutClaimedRewardsNestedInput {

    @Field(() => [UserCreateWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserCreateWithoutClaimedRewardsInput)
    create?: Array<UserCreateWithoutClaimedRewardsInput>;

    @Field(() => [UserCreateOrConnectWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClaimedRewardsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutClaimedRewardsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutClaimedRewardsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClaimedRewardsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutClaimedRewardsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutClaimedRewardsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutClaimedRewardsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutClaimedRewardsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutClaimedRewardsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
