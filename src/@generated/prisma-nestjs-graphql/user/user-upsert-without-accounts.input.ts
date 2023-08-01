import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAccountsInput } from './user-update-without-accounts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAccountsInput } from './user-create-without-accounts.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAccountsInput {

    @Field(() => UserUpdateWithoutAccountsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAccountsInput)
    update!: UserUpdateWithoutAccountsInput;

    @Field(() => UserCreateWithoutAccountsInput, {nullable:false})
    @Type(() => UserCreateWithoutAccountsInput)
    create!: UserCreateWithoutAccountsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
