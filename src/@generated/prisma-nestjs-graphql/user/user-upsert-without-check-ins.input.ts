import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCheckInsInput } from './user-update-without-check-ins.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCheckInsInput } from './user-create-without-check-ins.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCheckInsInput {

    @Field(() => UserUpdateWithoutCheckInsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCheckInsInput)
    update!: UserUpdateWithoutCheckInsInput;

    @Field(() => UserCreateWithoutCheckInsInput, {nullable:false})
    @Type(() => UserCreateWithoutCheckInsInput)
    create!: UserCreateWithoutCheckInsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
