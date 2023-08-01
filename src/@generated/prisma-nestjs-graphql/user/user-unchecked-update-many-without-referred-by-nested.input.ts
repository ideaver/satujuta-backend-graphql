import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferredByInput } from './user-create-without-referred-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReferredByInput } from './user-create-or-connect-without-referred-by.input';
import { UserUpsertWithWhereUniqueWithoutReferredByInput } from './user-upsert-with-where-unique-without-referred-by.input';
import { UserCreateManyReferredByInputEnvelope } from './user-create-many-referred-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutReferredByInput } from './user-update-with-where-unique-without-referred-by.input';
import { UserUpdateManyWithWhereWithoutReferredByInput } from './user-update-many-with-where-without-referred-by.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutReferredByNestedInput {

    @Field(() => [UserCreateWithoutReferredByInput], {nullable:true})
    @Type(() => UserCreateWithoutReferredByInput)
    create?: Array<UserCreateWithoutReferredByInput>;

    @Field(() => [UserCreateOrConnectWithoutReferredByInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReferredByInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutReferredByInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutReferredByInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferredByInput>;

    @Field(() => UserCreateManyReferredByInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyReferredByInputEnvelope)
    createMany?: UserCreateManyReferredByInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutReferredByInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutReferredByInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutReferredByInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutReferredByInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutReferredByInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferredByInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
