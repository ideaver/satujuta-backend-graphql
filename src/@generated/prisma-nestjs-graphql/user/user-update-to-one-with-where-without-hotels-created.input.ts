import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHotelsCreatedInput } from './user-update-without-hotels-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHotelsCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHotelsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHotelsCreatedInput)
    data!: UserUpdateWithoutHotelsCreatedInput;
}
