import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPointTransactionsInput } from './user-update-without-point-transactions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPointTransactionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPointTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPointTransactionsInput)
    data!: UserUpdateWithoutPointTransactionsInput;
}
