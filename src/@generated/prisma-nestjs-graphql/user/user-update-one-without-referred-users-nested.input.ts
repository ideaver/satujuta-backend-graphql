import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferredUsersInput } from './user-create-without-referred-users.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReferredUsersInput } from './user-create-or-connect-without-referred-users.input';
import { UserUpsertWithoutReferredUsersInput } from './user-upsert-without-referred-users.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReferredUsersInput } from './user-update-to-one-with-where-without-referred-users.input';

@InputType()
export class UserUpdateOneWithoutReferredUsersNestedInput {

    @Field(() => UserCreateWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserCreateWithoutReferredUsersInput)
    create?: UserCreateWithoutReferredUsersInput;

    @Field(() => UserCreateOrConnectWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReferredUsersInput)
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput;

    @Field(() => UserUpsertWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserUpsertWithoutReferredUsersInput)
    upsert?: UserUpsertWithoutReferredUsersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReferredUsersInput)
    update?: UserUpdateToOneWithWhereWithoutReferredUsersInput;
}
