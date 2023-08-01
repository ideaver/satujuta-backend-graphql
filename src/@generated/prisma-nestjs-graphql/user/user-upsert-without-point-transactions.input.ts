import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPointTransactionsInput } from './user-update-without-point-transactions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPointTransactionsInput } from './user-create-without-point-transactions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPointTransactionsInput {

    @Field(() => UserUpdateWithoutPointTransactionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPointTransactionsInput)
    update!: UserUpdateWithoutPointTransactionsInput;

    @Field(() => UserCreateWithoutPointTransactionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPointTransactionsInput)
    create!: UserCreateWithoutPointTransactionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
