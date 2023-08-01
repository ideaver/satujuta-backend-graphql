import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFilesCreatedInput } from './user-create-without-files-created.input';

@InputType()
export class UserCreateOrConnectWithoutFilesCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutFilesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutFilesCreatedInput)
    create!: UserCreateWithoutFilesCreatedInput;
}
