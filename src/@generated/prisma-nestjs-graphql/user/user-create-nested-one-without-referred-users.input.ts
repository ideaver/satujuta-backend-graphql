import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferredUsersInput } from './user-create-without-referred-users.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReferredUsersInput } from './user-create-or-connect-without-referred-users.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReferredUsersInput {

    @Field(() => UserCreateWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserCreateWithoutReferredUsersInput)
    create?: UserCreateWithoutReferredUsersInput;

    @Field(() => UserCreateOrConnectWithoutReferredUsersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReferredUsersInput)
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
