import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutProjectInput } from './account-create-without-project.input';

@InputType()
export class AccountCreateOrConnectWithoutProjectInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountCreateWithoutProjectInput, {nullable:false})
    @Type(() => AccountCreateWithoutProjectInput)
    create!: AccountCreateWithoutProjectInput;
}
