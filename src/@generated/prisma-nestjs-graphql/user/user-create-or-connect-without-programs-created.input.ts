import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProgramsCreatedInput } from './user-create-without-programs-created.input';

@InputType()
export class UserCreateOrConnectWithoutProgramsCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutProgramsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutProgramsCreatedInput)
    create!: UserCreateWithoutProgramsCreatedInput;
}
