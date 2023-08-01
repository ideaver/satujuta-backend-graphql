import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumUserRoleFilter } from '../prisma/enum-user-role-filter.input';
import { EnumUserTypeFilter } from '../prisma/enum-user-type-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumUserStatusFilter } from '../prisma/enum-user-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumThemeFilter } from '../prisma/enum-theme-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';
import { UserNullableRelationFilter } from './user-nullable-relation-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';
import { CheckInListRelationFilter } from '../check-in/check-in-list-relation-filter.input';
import { SchoolNullableRelationFilter } from '../school/school-nullable-relation-filter.input';
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';
import { PointTransactionListRelationFilter } from '../point-transaction/point-transaction-list-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { SessionListRelationFilter } from '../session/session-list-relation-filter.input';
import { HotelListRelationFilter } from '../hotel/hotel-list-relation-filter.input';
import { ProgramListRelationFilter } from '../program/program-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { RewardListRelationFilter } from '../reward/reward-list-relation-filter.input';
import { UserNotificationListRelationFilter } from '../user-notification/user-notification-list-relation-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @HideField()
    addressId?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    whatsappNumber?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => EnumUserRoleFilter, {nullable:true})
    userRole?: EnumUserRoleFilter;

    @Field(() => EnumUserTypeFilter, {nullable:true})
    userType?: EnumUserTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarUrl?: StringNullableFilter;

    @HideField()
    whatsappVerifiedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @HideField()
    referredById?: StringNullableFilter;

    @HideField()
    status?: EnumUserStatusFilter;

    @HideField()
    schoolId?: IntNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @Field(() => EnumThemeFilter, {nullable:true})
    theme?: EnumThemeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    referredBy?: UserNullableRelationFilter;

    @HideField()
    referredUsers?: UserListRelationFilter;

    @HideField()
    checkIns?: CheckInListRelationFilter;

    @Field(() => SchoolNullableRelationFilter, {nullable:true})
    school?: SchoolNullableRelationFilter;

    @HideField()
    accounts?: AccountListRelationFilter;

    @HideField()
    transactions?: TransactionListRelationFilter;

    @HideField()
    PointTransactions?: PointTransactionListRelationFilter;

    @HideField()
    orders?: OrderListRelationFilter;

    @HideField()
    sessions?: SessionListRelationFilter;

    @HideField()
    hotelsCreated?: HotelListRelationFilter;

    @HideField()
    programsParticipation?: ProgramListRelationFilter;

    @HideField()
    projectsInvestment?: ProjectListRelationFilter;

    @HideField()
    claimedRewards?: RewardListRelationFilter;

    @HideField()
    userNotifications?: UserNotificationListRelationFilter;

    @HideField()
    programsCreated?: ProgramListRelationFilter;

    @HideField()
    filesCreated?: FileListRelationFilter;
}
