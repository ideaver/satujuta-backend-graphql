import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSchoolInput } from './user-create-without-school.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSchoolInput } from './user-create-or-connect-without-school.input';
import { UserUpsertWithWhereUniqueWithoutSchoolInput } from './user-upsert-with-where-unique-without-school.input';
import { UserCreateManySchoolInputEnvelope } from './user-create-many-school-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutSchoolInput } from './user-update-with-where-unique-without-school.input';
import { UserUpdateManyWithWhereWithoutSchoolInput } from './user-update-many-with-where-without-school.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutSchoolNestedInput {

    @Field(() => [UserCreateWithoutSchoolInput], {nullable:true})
    @Type(() => UserCreateWithoutSchoolInput)
    create?: Array<UserCreateWithoutSchoolInput>;

    @Field(() => [UserCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutSchoolInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolInput>;

    @Field(() => UserCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => UserCreateManySchoolInputEnvelope)
    createMany?: UserCreateManySchoolInputEnvelope;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutSchoolInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutSchoolInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutSchoolInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
