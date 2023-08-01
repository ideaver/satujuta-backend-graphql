import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSessionsInput } from '../user/user-create-nested-one-without-sessions.input';

@InputType()
export class SessionCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    device!: string;

    @Field(() => Float, {nullable:false})
    ipAddress!: number;

    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSessionsInput;
}
