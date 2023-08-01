import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInvestmentInput } from './user-create-without-projects-investment.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectsInvestmentInput } from './user-create-or-connect-without-projects-investment.input';
import { UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput } from './user-upsert-with-where-unique-without-projects-investment.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput } from './user-update-with-where-unique-without-projects-investment.input';
import { UserUpdateManyWithWhereWithoutProjectsInvestmentInput } from './user-update-many-with-where-without-projects-investment.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutProjectsInvestmentNestedInput {

    @Field(() => [UserCreateWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserCreateWithoutProjectsInvestmentInput)
    create?: Array<UserCreateWithoutProjectsInvestmentInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectsInvestmentInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInvestmentInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProjectsInvestmentInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutProjectsInvestmentInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutProjectsInvestmentInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutProjectsInvestmentInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutProjectsInvestmentInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
