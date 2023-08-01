import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProgramsCreatedInput } from './user-update-without-programs-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProgramsCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProgramsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgramsCreatedInput)
    data!: UserUpdateWithoutProgramsCreatedInput;
}
