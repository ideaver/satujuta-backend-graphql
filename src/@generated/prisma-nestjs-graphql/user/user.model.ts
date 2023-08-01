import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserType } from '../prisma/user-type.enum';
import { HideField } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { Theme } from '../prisma/theme.enum';
import { Address } from '../address/address.model';
import { CheckIn } from '../check-in/check-in.model';
import { School } from '../school/school.model';
import { Account } from '../account/account.model';
import { Transaction } from '../transaction/transaction.model';
import { PointTransaction } from '../point-transaction/point-transaction.model';
import { Order } from '../order/order.model';
import { Session } from '../session/session.model';
import { Hotel } from '../hotel/hotel.model';
import { Program } from '../program/program.model';
import { Project } from '../project/project.model';
import { Reward } from '../reward/reward.model';
import { UserNotification } from '../user-notification/user-notification.model';
import { File } from '../file/file.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    addressId!: number;

    @Field(() => UserRole, {nullable:false,defaultValue:'MEMBER'})
    userRole!: keyof typeof UserRole;

    @Field(() => UserType, {nullable:false})
    userType!: keyof typeof UserType;

    @Field(() => String, {nullable:true})
    avatarUrl!: string | null;

    @Field(() => String, {nullable:false})
    whatsappNumber!: string;

    @Field(() => Date, {nullable:true})
    whatsappVerifiedAt!: Date | null;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    referredById!: string | null;

    @Field(() => UserStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof UserStatus;

    @Field(() => Int, {nullable:true})
    schoolId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Theme, {nullable:false,defaultValue:'LIGHT'})
    theme!: keyof typeof Theme;

    @Field(() => Address, {nullable:false})
    address?: Address;

    @Field(() => User, {nullable:true})
    referredBy?: User | null;

    @Field(() => [User], {nullable:true})
    referredUsers?: Array<User>;

    @Field(() => [CheckIn], {nullable:true})
    checkIns?: Array<CheckIn>;

    @Field(() => School, {nullable:true})
    school?: School | null;

    @Field(() => [Account], {nullable:true})
    accounts?: Array<Account>;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => [PointTransaction], {nullable:true})
    PointTransactions?: Array<PointTransaction>;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;

    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;

    @Field(() => [Hotel], {nullable:true})
    hotelsCreated?: Array<Hotel>;

    @Field(() => [Program], {nullable:true})
    programsParticipation?: Array<Program>;

    @Field(() => [Project], {nullable:true})
    projectsInvestment?: Array<Project>;

    @Field(() => [Reward], {nullable:true})
    claimedRewards?: Array<Reward>;

    @Field(() => [UserNotification], {nullable:true})
    userNotifications?: Array<UserNotification>;

    @Field(() => [Program], {nullable:true})
    programsCreated?: Array<Program>;

    @Field(() => [File], {nullable:true})
    filesCreated?: Array<File>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
