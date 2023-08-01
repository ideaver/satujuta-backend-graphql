import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFilesCreatedInput } from './user-update-without-files-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFilesCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFilesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutFilesCreatedInput)
    data!: UserUpdateWithoutFilesCreatedInput;
}
