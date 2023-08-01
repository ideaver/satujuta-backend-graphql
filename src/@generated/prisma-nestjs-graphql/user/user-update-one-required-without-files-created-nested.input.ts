import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFilesCreatedInput } from './user-create-without-files-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFilesCreatedInput } from './user-create-or-connect-without-files-created.input';
import { UserUpsertWithoutFilesCreatedInput } from './user-upsert-without-files-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFilesCreatedInput } from './user-update-to-one-with-where-without-files-created.input';

@InputType()
export class UserUpdateOneRequiredWithoutFilesCreatedNestedInput {

    @Field(() => UserCreateWithoutFilesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutFilesCreatedInput)
    create?: UserCreateWithoutFilesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutFilesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFilesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutFilesCreatedInput;

    @Field(() => UserUpsertWithoutFilesCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutFilesCreatedInput)
    upsert?: UserUpsertWithoutFilesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFilesCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFilesCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutFilesCreatedInput;
}
