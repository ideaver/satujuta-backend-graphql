import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferredByInput } from './user-create-without-referred-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReferredByInput } from './user-create-or-connect-without-referred-by.input';
import { UserCreateManyReferredByInputEnvelope } from './user-create-many-referred-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutReferredByInput {

    @Field(() => [UserCreateWithoutReferredByInput], {nullable:true})
    @Type(() => UserCreateWithoutReferredByInput)
    create?: Array<UserCreateWithoutReferredByInput>;

    @Field(() => [UserCreateOrConnectWithoutReferredByInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReferredByInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferredByInput>;

    @Field(() => UserCreateManyReferredByInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyReferredByInputEnvelope)
    createMany?: UserCreateManyReferredByInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;
}
