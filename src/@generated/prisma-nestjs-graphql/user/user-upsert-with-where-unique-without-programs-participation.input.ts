import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProgramsParticipationInput } from './user-update-without-programs-participation.input';
import { UserCreateWithoutProgramsParticipationInput } from './user-create-without-programs-participation.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutProgramsParticipationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateWithoutProgramsParticipationInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgramsParticipationInput)
    update!: UserUpdateWithoutProgramsParticipationInput;

    @Field(() => UserCreateWithoutProgramsParticipationInput, {nullable:false})
    @Type(() => UserCreateWithoutProgramsParticipationInput)
    create!: UserCreateWithoutProgramsParticipationInput;
}
