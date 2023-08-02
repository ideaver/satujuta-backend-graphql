import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserSelect {
  @Field(() => Boolean, { nullable: true })
  id?: boolean;
  @Field(() => Boolean, { nullable: true })
  firstName?: boolean;
  @Field(() => Boolean, { nullable: true })
  lastName?: boolean;
  @Field(() => Boolean, { nullable: true })
  email?: boolean;
  @Field(() => Boolean, { nullable: true })
  addressId?: boolean;
  @Field(() => Boolean, { nullable: true })
  userRole?: boolean;
  @Field(() => Boolean, { nullable: true })
  userType?: boolean;
  @Field(() => Boolean, { nullable: true })
  avatarUrl?: boolean;
  @Field(() => Boolean, { nullable: true })
  whatsappNumber?: boolean;
  @Field(() => Boolean, { nullable: true })
  whatsappVerifiedAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  password?: boolean;
  @Field(() => Boolean, { nullable: true })
  referredById?: boolean;
  @Field(() => Boolean, { nullable: true })
  status?: boolean;
  @Field(() => Boolean, { nullable: true })
  schoolId?: boolean;
  @Field(() => Boolean, { nullable: true })
  createdAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  deletedAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  theme?: boolean;
  @Field(() => Boolean, { nullable: true })
  address?: boolean;
  @Field(() => Boolean, { nullable: true })
  referredBy?: boolean;
  @Field(() => Boolean, { nullable: true })
  referredUsers?: boolean;
  @Field(() => Boolean, { nullable: true })
  checkIns?: boolean;
  @Field(() => Boolean, { nullable: true })
  school?: boolean;
  @Field(() => Boolean, { nullable: true })
  accounts?: boolean;
  @Field(() => Boolean, { nullable: true })
  transactions?: boolean;
  @Field(() => Boolean, { nullable: true })
  PointTransactions?: boolean;
  @Field(() => Boolean, { nullable: true })
  orders?: boolean;
  @Field(() => Boolean, { nullable: true })
  sessions?: boolean;
  @Field(() => Boolean, { nullable: true })
  hotelsCreated?: boolean;
  @Field(() => Boolean, { nullable: true })
  programsParticipation?: boolean;
  @Field(() => Boolean, { nullable: true })
  projectsInvestment?: boolean;
  @Field(() => Boolean, { nullable: true })
  claimedRewards?: boolean;
  @Field(() => Boolean, { nullable: true })
  userNotifications?: boolean;
  @Field(() => Boolean, { nullable: true })
  programsCreated?: boolean;
  @Field(() => Boolean, { nullable: true })
  filesCreated?: boolean;
  @Field(() => Boolean, { nullable: true })
  _count?: boolean;
}
