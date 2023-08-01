import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTransactionsInput } from './user-update-without-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutTransactionsInput {

    @Field(() => UserUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTransactionsInput)
    update!: UserUpdateWithoutTransactionsInput;

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutTransactionsInput)
    create!: UserCreateWithoutTransactionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
