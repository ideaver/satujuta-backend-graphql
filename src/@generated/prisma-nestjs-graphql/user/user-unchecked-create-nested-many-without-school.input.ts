import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSchoolInput } from './user-create-without-school.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSchoolInput } from './user-create-or-connect-without-school.input';
import { UserCreateManySchoolInputEnvelope } from './user-create-many-school-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutSchoolInput {

    @Field(() => [UserCreateWithoutSchoolInput], {nullable:true})
    @Type(() => UserCreateWithoutSchoolInput)
    create?: Array<UserCreateWithoutSchoolInput>;

    @Field(() => [UserCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolInput>;

    @Field(() => UserCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => UserCreateManySchoolInputEnvelope)
    createMany?: UserCreateManySchoolInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;
}
