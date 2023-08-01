import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCheckInsInput } from './user-update-without-check-ins.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCheckInsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCheckInsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCheckInsInput)
    data!: UserUpdateWithoutCheckInsInput;
}
