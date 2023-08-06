import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import {
  Address,
  CheckIn,
  School,
  Account,
  Transaction,
  PointTransaction,
  Order,
  Hotel,
  Program,
  Project,
  Reward,
  UserNotification,
  UserCount,
  UserRole,
  UserType,
  UserStatus,
  Theme,
  Session,
  File,
} from 'src/@generated';
import * as G from 'src/@generated';

@ObjectType()
export class User extends G.User {
  @Field(() => String, {
    nullable: false,
    description: 'Dwadidaw',
  })
  id!: string;
  // @Field(() => String, { nullable: false })
  // firstName!: string;
  // @Field(() => String, { nullable: true })
  // lastName!: string | null;
  // @Field(() => String, { nullable: false })
  // email!: string;
  // @Field(() => Int, { nullable: false })
  // addressId!: number;
  // @Field(() => UserRole, { nullable: false, defaultValue: 'MEMBER' })
  // userRole!: keyof typeof UserRole;
  // @Field(() => UserType, { nullable: false })
  // userType!: keyof typeof UserType;
  // @Field(() => String, { nullable: true })
  // avatarUrl!: string | null;
  // @Field(() => String, { nullable: false })
  // whatsappNumber!: string;
  // @Field(() => Date, { nullable: true })
  // whatsappVerifiedAt!: Date | null;
  // @HideField()
  // password!: string;
  // @Field(() => String, { nullable: true })
  // referredById!: string | null;
  // @Field(() => UserStatus, { nullable: false, defaultValue: 'PENDING' })
  // status!: keyof typeof UserStatus;
  // @Field(() => Int, { nullable: true })
  // schoolId!: number | null;
  // @Field(() => Date, { nullable: false })
  // createdAt!: Date;
  // @Field(() => Date, { nullable: false })
  // updatedAt!: Date;
  // @Field(() => Date, { nullable: true })
  // deletedAt!: Date | null;
  // @Field(() => Theme, { nullable: false, defaultValue: 'LIGHT' })
  // theme!: keyof typeof Theme;
  // @Field(() => Address, { nullable: false })
  // address?: InstanceType<typeof Address>;
  // @Field(() => User, { nullable: true })
  // referredBy?: InstanceType<typeof User> | null;
  // @Field(() => [User], { nullable: true })
  // referredUsers?: Array<User>;
  // @Field(() => [CheckIn], { nullable: true })
  // checkIns?: Array<CheckIn>;
  // @Field(() => School, { nullable: true })
  // school?: InstanceType<typeof School> | null;
  // @Field(() => [Account], { nullable: true })
  // accounts?: Array<Account>;
  // @Field(() => [Transaction], { nullable: true })
  // transactions?: Array<Transaction>;
  // @Field(() => [PointTransaction], { nullable: true })
  // PointTransactions?: Array<PointTransaction>;
  // @Field(() => [Order], { nullable: true })
  // orders?: Array<Order>;
  // @Field(() => [Session], { nullable: true })
  // sessions?: Array<Session>;
  // @Field(() => [Hotel], { nullable: true })
  // hotelsCreated?: Array<Hotel>;
  // @Field(() => [Program], { nullable: true })
  // programsParticipation?: Array<Program>;
  // @Field(() => [Project], { nullable: true })
  // projectsInvestment?: Array<Project>;
  // @Field(() => [Reward], { nullable: true })
  // claimedRewards?: Array<Reward>;
  // @Field(() => [UserNotification], { nullable: true })
  // userNotifications?: Array<UserNotification>;
  // @Field(() => [Program], { nullable: true })
  // programsCreated?: Array<Program>;
  // @Field(() => [File], { nullable: true })
  // filesCreated?: Array<File>;
  // @Field(() => UserCount, { nullable: false })
  // _count?: InstanceType<typeof UserCount>;
}
