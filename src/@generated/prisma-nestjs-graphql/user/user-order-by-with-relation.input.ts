import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';
import { CheckInOrderByRelationAggregateInput } from '../check-in/check-in-order-by-relation-aggregate.input';
import { SchoolOrderByWithRelationInput } from '../school/school-order-by-with-relation.input';
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';
import { PointTransactionOrderByRelationAggregateInput } from '../point-transaction/point-transaction-order-by-relation-aggregate.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';
import { HotelOrderByRelationAggregateInput } from '../hotel/hotel-order-by-relation-aggregate.input';
import { ProgramOrderByRelationAggregateInput } from '../program/program-order-by-relation-aggregate.input';
import { ProjectOrderByRelationAggregateInput } from '../project/project-order-by-relation-aggregate.input';
import { RewardOrderByRelationAggregateInput } from '../reward/reward-order-by-relation-aggregate.input';
import { UserNotificationOrderByRelationAggregateInput } from '../user-notification/user-notification-order-by-relation-aggregate.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @HideField()
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @HideField()
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userRole?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatarUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    whatsappNumber?: keyof typeof SortOrder;

    @HideField()
    whatsappVerifiedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @HideField()
    referredById?: SortOrderInput;

    @HideField()
    status?: keyof typeof SortOrder;

    @HideField()
    schoolId?: SortOrderInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    theme?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    address?: AddressOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    referredBy?: UserOrderByWithRelationInput;

    @HideField()
    referredUsers?: UserOrderByRelationAggregateInput;

    @HideField()
    checkIns?: CheckInOrderByRelationAggregateInput;

    @Field(() => SchoolOrderByWithRelationInput, {nullable:true})
    school?: SchoolOrderByWithRelationInput;

    @HideField()
    accounts?: AccountOrderByRelationAggregateInput;

    @HideField()
    transactions?: TransactionOrderByRelationAggregateInput;

    @HideField()
    PointTransactions?: PointTransactionOrderByRelationAggregateInput;

    @HideField()
    orders?: OrderOrderByRelationAggregateInput;

    @HideField()
    sessions?: SessionOrderByRelationAggregateInput;

    @HideField()
    hotelsCreated?: HotelOrderByRelationAggregateInput;

    @HideField()
    programsParticipation?: ProgramOrderByRelationAggregateInput;

    @HideField()
    projectsInvestment?: ProjectOrderByRelationAggregateInput;

    @HideField()
    claimedRewards?: RewardOrderByRelationAggregateInput;

    @HideField()
    userNotifications?: UserNotificationOrderByRelationAggregateInput;

    @HideField()
    programsCreated?: ProgramOrderByRelationAggregateInput;

    @HideField()
    filesCreated?: FileOrderByRelationAggregateInput;
}
