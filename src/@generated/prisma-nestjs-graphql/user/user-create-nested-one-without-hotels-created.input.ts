import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHotelsCreatedInput } from './user-create-without-hotels-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHotelsCreatedInput } from './user-create-or-connect-without-hotels-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHotelsCreatedInput {

    @Field(() => UserCreateWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutHotelsCreatedInput)
    create?: UserCreateWithoutHotelsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHotelsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHotelsCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
