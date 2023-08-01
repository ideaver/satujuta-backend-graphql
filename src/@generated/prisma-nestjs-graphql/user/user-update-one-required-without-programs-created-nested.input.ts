import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProgramsCreatedInput } from './user-create-without-programs-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProgramsCreatedInput } from './user-create-or-connect-without-programs-created.input';
import { UserUpsertWithoutProgramsCreatedInput } from './user-upsert-without-programs-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProgramsCreatedInput } from './user-update-to-one-with-where-without-programs-created.input';

@InputType()
export class UserUpdateOneRequiredWithoutProgramsCreatedNestedInput {

    @Field(() => UserCreateWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutProgramsCreatedInput)
    create?: UserCreateWithoutProgramsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgramsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutProgramsCreatedInput;

    @Field(() => UserUpsertWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutProgramsCreatedInput)
    upsert?: UserUpsertWithoutProgramsCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProgramsCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProgramsCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutProgramsCreatedInput;
}
