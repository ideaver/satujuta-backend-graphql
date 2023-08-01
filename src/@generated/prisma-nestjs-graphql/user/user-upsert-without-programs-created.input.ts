import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProgramsCreatedInput } from './user-update-without-programs-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProgramsCreatedInput } from './user-create-without-programs-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProgramsCreatedInput {

    @Field(() => UserUpdateWithoutProgramsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgramsCreatedInput)
    update!: UserUpdateWithoutProgramsCreatedInput;

    @Field(() => UserCreateWithoutProgramsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutProgramsCreatedInput)
    create!: UserCreateWithoutProgramsCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
