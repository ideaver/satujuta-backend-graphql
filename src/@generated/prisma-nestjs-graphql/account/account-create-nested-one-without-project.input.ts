import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutProjectInput } from './account-create-without-project.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutProjectInput } from './account-create-or-connect-without-project.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutProjectInput {

    @Field(() => AccountCreateWithoutProjectInput, {nullable:true})
    @Type(() => AccountCreateWithoutProjectInput)
    create?: AccountCreateWithoutProjectInput;

    @Field(() => AccountCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutProjectInput)
    connectOrCreate?: AccountCreateOrConnectWithoutProjectInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
