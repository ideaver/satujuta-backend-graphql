import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInvestmentInput } from './user-create-without-projects-investment.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectsInvestmentInput } from './user-create-or-connect-without-projects-investment.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutProjectsInvestmentInput {

    @Field(() => [UserCreateWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserCreateWithoutProjectsInvestmentInput)
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectsInvestmentInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>>;
}
