import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReferredUsersInput } from './user-update-without-referred-users.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReferredUsersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReferredUsersInput, {nullable:false})
    @Type(() => UserUpdateWithoutReferredUsersInput)
    data!: UserUpdateWithoutReferredUsersInput;
}
