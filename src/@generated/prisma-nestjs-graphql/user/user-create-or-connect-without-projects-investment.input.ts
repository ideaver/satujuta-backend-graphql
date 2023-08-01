import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectsInvestmentInput } from './user-create-without-projects-investment.input';

@InputType()
export class UserCreateOrConnectWithoutProjectsInvestmentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutProjectsInvestmentInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectsInvestmentInput)
    create!: UserCreateWithoutProjectsInvestmentInput;
}
