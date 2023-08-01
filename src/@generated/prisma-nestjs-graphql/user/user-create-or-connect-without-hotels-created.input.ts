import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHotelsCreatedInput } from './user-create-without-hotels-created.input';

@InputType()
export class UserCreateOrConnectWithoutHotelsCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutHotelsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutHotelsCreatedInput)
    create!: UserCreateWithoutHotelsCreatedInput;
}
