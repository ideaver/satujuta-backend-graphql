import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTransactionsInput } from './user-update-without-transactions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTransactionsInput)
    data!: UserUpdateWithoutTransactionsInput;
}
