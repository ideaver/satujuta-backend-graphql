import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProgramsParticipationInput } from './user-create-without-programs-participation.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProgramsParticipationInput } from './user-create-or-connect-without-programs-participation.input';
import { UserUpsertWithWhereUniqueWithoutProgramsParticipationInput } from './user-upsert-with-where-unique-without-programs-participation.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutProgramsParticipationInput } from './user-update-with-where-unique-without-programs-participation.input';
import { UserUpdateManyWithWhereWithoutProgramsParticipationInput } from './user-update-many-with-where-without-programs-participation.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutProgramsParticipationNestedInput {

    @Field(() => [UserCreateWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserCreateWithoutProgramsParticipationInput)
    create?: Array<UserCreateWithoutProgramsParticipationInput>;

    @Field(() => [UserCreateOrConnectWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgramsParticipationInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutProgramsParticipationInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProgramsParticipationInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutProgramsParticipationInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutProgramsParticipationInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutProgramsParticipationInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutProgramsParticipationInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
