import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHotelsCreatedInput } from './user-update-without-hotels-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHotelsCreatedInput } from './user-create-without-hotels-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHotelsCreatedInput {

    @Field(() => UserUpdateWithoutHotelsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHotelsCreatedInput)
    update!: UserUpdateWithoutHotelsCreatedInput;

    @Field(() => UserCreateWithoutHotelsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutHotelsCreatedInput)
    create!: UserCreateWithoutHotelsCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
