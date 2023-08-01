import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumUserRoleFieldUpdateOperationsInput } from '../prisma/enum-user-role-field-update-operations.input';
import { EnumUserTypeFieldUpdateOperationsInput } from '../prisma/enum-user-type-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumUserStatusFieldUpdateOperationsInput } from '../prisma/enum-user-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumThemeFieldUpdateOperationsInput } from '../prisma/enum-theme-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutUserNestedInput } from '../address/address-update-one-required-without-user-nested.input';
import { UserUpdateOneWithoutReferredUsersNestedInput } from './user-update-one-without-referred-users-nested.input';
import { UserUpdateManyWithoutReferredByNestedInput } from './user-update-many-without-referred-by-nested.input';
import { CheckInUpdateManyWithoutUserNestedInput } from '../check-in/check-in-update-many-without-user-nested.input';
import { SchoolUpdateOneWithoutStudentsNestedInput } from '../school/school-update-one-without-students-nested.input';
import { AccountUpdateManyWithoutUserNestedInput } from '../account/account-update-many-without-user-nested.input';
import { TransactionUpdateManyWithoutUserNestedInput } from '../transaction/transaction-update-many-without-user-nested.input';
import { PointTransactionUpdateManyWithoutUserNestedInput } from '../point-transaction/point-transaction-update-many-without-user-nested.input';
import { OrderUpdateManyWithoutOrderByNestedInput } from '../order/order-update-many-without-order-by-nested.input';
import { SessionUpdateManyWithoutUserNestedInput } from '../session/session-update-many-without-user-nested.input';
import { HotelUpdateManyWithoutCreatedByNestedInput } from '../hotel/hotel-update-many-without-created-by-nested.input';
import { ProgramUpdateManyWithoutParticipantNestedInput } from '../program/program-update-many-without-participant-nested.input';
import { ProjectUpdateManyWithoutInvestorsNestedInput } from '../project/project-update-many-without-investors-nested.input';
import { RewardUpdateManyWithoutClaimersNestedInput } from '../reward/reward-update-many-without-claimers-nested.input';
import { UserNotificationUpdateManyWithoutUserNestedInput } from '../user-notification/user-notification-update-many-without-user-nested.input';
import { FileUpdateManyWithoutCreatedByNestedInput } from '../file/file-update-many-without-created-by-nested.input';

@InputType()
export class UserUpdateWithoutProgramsCreatedInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    userRole?: EnumUserRoleFieldUpdateOperationsInput;

    @Field(() => EnumUserTypeFieldUpdateOperationsInput, {nullable:true})
    userType?: EnumUserTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatarUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    whatsappNumber?: StringFieldUpdateOperationsInput;

    @HideField()
    whatsappVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @HideField()
    status?: EnumUserStatusFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumThemeFieldUpdateOperationsInput, {nullable:true})
    theme?: EnumThemeFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    address?: AddressUpdateOneRequiredWithoutUserNestedInput;

    @Field(() => UserUpdateOneWithoutReferredUsersNestedInput, {nullable:true})
    referredBy?: UserUpdateOneWithoutReferredUsersNestedInput;

    @HideField()
    referredUsers?: UserUpdateManyWithoutReferredByNestedInput;

    @HideField()
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;

    @Field(() => SchoolUpdateOneWithoutStudentsNestedInput, {nullable:true})
    school?: SchoolUpdateOneWithoutStudentsNestedInput;

    @HideField()
    accounts?: AccountUpdateManyWithoutUserNestedInput;

    @HideField()
    transactions?: TransactionUpdateManyWithoutUserNestedInput;

    @HideField()
    PointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput;

    @HideField()
    orders?: OrderUpdateManyWithoutOrderByNestedInput;

    @HideField()
    sessions?: SessionUpdateManyWithoutUserNestedInput;

    @HideField()
    hotelsCreated?: HotelUpdateManyWithoutCreatedByNestedInput;

    @HideField()
    programsParticipation?: ProgramUpdateManyWithoutParticipantNestedInput;

    @HideField()
    projectsInvestment?: ProjectUpdateManyWithoutInvestorsNestedInput;

    @HideField()
    claimedRewards?: RewardUpdateManyWithoutClaimersNestedInput;

    @HideField()
    userNotifications?: UserNotificationUpdateManyWithoutUserNestedInput;

    @HideField()
    filesCreated?: FileUpdateManyWithoutCreatedByNestedInput;
}
