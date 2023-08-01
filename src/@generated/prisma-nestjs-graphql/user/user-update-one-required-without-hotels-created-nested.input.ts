import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHotelsCreatedInput } from './user-create-without-hotels-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHotelsCreatedInput } from './user-create-or-connect-without-hotels-created.input';
import { UserUpsertWithoutHotelsCreatedInput } from './user-upsert-without-hotels-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHotelsCreatedInput } from './user-update-to-one-with-where-without-hotels-created.input';

@InputType()
export class UserUpdateOneRequiredWithoutHotelsCreatedNestedInput {

    @Field(() => UserCreateWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutHotelsCreatedInput)
    create?: UserCreateWithoutHotelsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHotelsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHotelsCreatedInput;

    @Field(() => UserUpsertWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHotelsCreatedInput)
    upsert?: UserUpsertWithoutHotelsCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHotelsCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHotelsCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutHotelsCreatedInput;
}
