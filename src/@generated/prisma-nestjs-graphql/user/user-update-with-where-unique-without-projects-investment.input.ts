import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProjectsInvestmentInput } from './user-update-without-projects-investment.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateWithoutProjectsInvestmentInput, {nullable:false})
    @Type(() => UserUpdateWithoutProjectsInvestmentInput)
    data!: UserUpdateWithoutProjectsInvestmentInput;
}
