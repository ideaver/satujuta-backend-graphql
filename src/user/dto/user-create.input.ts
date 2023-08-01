import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { AddressCreateNestedOneWithoutUserInput } from 'src/@generated/prisma-nestjs-graphql/address/address-create-nested-one-without-user.input';
import { Theme } from 'src/@generated/prisma-nestjs-graphql/prisma/theme.enum';
import { UserRole } from 'src/@generated/prisma-nestjs-graphql/prisma/user-role.enum';
import { UserType } from 'src/@generated/prisma-nestjs-graphql/prisma/user-type.enum';
import { UserCreateNestedOneWithoutReferredUsersInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create-nested-one-without-referred-users.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlpha()
    @Validator.IsNotEmpty()
    firstName!: string;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsAlpha()
    @Validator.IsNotEmpty()
    lastName?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => UserRole, {nullable:false})
    userRole!: keyof typeof UserRole;

    @Field(() => UserType, {nullable:false})
    userType!: keyof typeof UserType;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl({ require_protocol: true })
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    whatsappNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    @Validator.MaxLength(15)
    @Validator.IsAlphanumeric()
    password!: string;

    @Field(() => Theme, {nullable:true})
    theme?: keyof typeof Theme;

    @Field(() => AddressCreateNestedOneWithoutUserInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutUserInput;

    @Field(() => UserCreateNestedOneWithoutReferredUsersInput, {nullable:true})
    referredBy?: UserCreateNestedOneWithoutReferredUsersInput;
}