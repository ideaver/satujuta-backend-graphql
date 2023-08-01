import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProgramsParticipationInput } from './user-create-without-programs-participation.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProgramsParticipationInput } from './user-create-or-connect-without-programs-participation.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutProgramsParticipationInput {

    @Field(() => [UserCreateWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserCreateWithoutProgramsParticipationInput)
    create?: Array<UserCreateWithoutProgramsParticipationInput>;

    @Field(() => [UserCreateOrConnectWithoutProgramsParticipationInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgramsParticipationInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProgramsParticipationInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;
}
