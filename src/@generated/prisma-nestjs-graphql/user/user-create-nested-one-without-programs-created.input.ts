import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProgramsCreatedInput } from './user-create-without-programs-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProgramsCreatedInput } from './user-create-or-connect-without-programs-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProgramsCreatedInput {

    @Field(() => UserCreateWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutProgramsCreatedInput)
    create?: UserCreateWithoutProgramsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgramsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutProgramsCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
