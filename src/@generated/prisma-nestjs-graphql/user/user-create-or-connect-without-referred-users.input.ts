import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReferredUsersInput } from './user-create-without-referred-users.input';

@InputType()
export class UserCreateOrConnectWithoutReferredUsersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutReferredUsersInput, {nullable:false})
    @Type(() => UserCreateWithoutReferredUsersInput)
    create!: UserCreateWithoutReferredUsersInput;
}
