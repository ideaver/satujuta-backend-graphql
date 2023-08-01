import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFilesCreatedInput } from './user-update-without-files-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFilesCreatedInput } from './user-create-without-files-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFilesCreatedInput {

    @Field(() => UserUpdateWithoutFilesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutFilesCreatedInput)
    update!: UserUpdateWithoutFilesCreatedInput;

    @Field(() => UserCreateWithoutFilesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutFilesCreatedInput)
    create!: UserCreateWithoutFilesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
