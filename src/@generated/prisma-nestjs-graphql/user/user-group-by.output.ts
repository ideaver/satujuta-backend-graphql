import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserType } from '../prisma/user-type.enum';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { Theme } from '../prisma/theme.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => UserRole, {nullable:false})
    userRole!: keyof typeof UserRole;

    @Field(() => UserType, {nullable:false})
    userType!: keyof typeof UserType;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    whatsappNumber!: string;

    @Field(() => Date, {nullable:true})
    whatsappVerifiedAt?: Date | string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    referredById?: string;

    @Field(() => UserStatus, {nullable:false})
    status!: keyof typeof UserStatus;

    @Field(() => Int, {nullable:true})
    schoolId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Theme, {nullable:false})
    theme!: keyof typeof Theme;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
