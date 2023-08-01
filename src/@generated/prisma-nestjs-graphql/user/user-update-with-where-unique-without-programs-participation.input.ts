import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProgramsParticipationInput } from './user-update-without-programs-participation.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutProgramsParticipationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateWithoutProgramsParticipationInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgramsParticipationInput)
    data!: UserUpdateWithoutProgramsParticipationInput;
}
