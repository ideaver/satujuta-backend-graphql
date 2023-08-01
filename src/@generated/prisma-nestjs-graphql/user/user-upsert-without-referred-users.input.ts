import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReferredUsersInput } from './user-update-without-referred-users.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReferredUsersInput } from './user-create-without-referred-users.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReferredUsersInput {

    @Field(() => UserUpdateWithoutReferredUsersInput, {nullable:false})
    @Type(() => UserUpdateWithoutReferredUsersInput)
    update!: UserUpdateWithoutReferredUsersInput;

    @Field(() => UserCreateWithoutReferredUsersInput, {nullable:false})
    @Type(() => UserCreateWithoutReferredUsersInput)
    create!: UserCreateWithoutReferredUsersInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
