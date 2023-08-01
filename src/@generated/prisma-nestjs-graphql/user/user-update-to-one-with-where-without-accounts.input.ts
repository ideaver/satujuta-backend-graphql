import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAccountsInput } from './user-update-without-accounts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAccountsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAccountsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAccountsInput)
    data!: UserUpdateWithoutAccountsInput;
}
