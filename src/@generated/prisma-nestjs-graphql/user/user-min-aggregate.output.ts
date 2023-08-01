import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserType } from '../prisma/user-type.enum';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { Theme } from '../prisma/theme.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Int, {nullable:true})
    addressId?: number;

    @Field(() => UserRole, {nullable:true})
    userRole?: keyof typeof UserRole;

    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    whatsappNumber?: string;

    @Field(() => Date, {nullable:true})
    whatsappVerifiedAt?: Date | string;

    @HideField()
    password?: string;

    @Field(() => String, {nullable:true})
    referredById?: string;

    @Field(() => UserStatus, {nullable:true})
    status?: keyof typeof UserStatus;

    @Field(() => Int, {nullable:true})
    schoolId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Theme, {nullable:true})
    theme?: keyof typeof Theme;
}
