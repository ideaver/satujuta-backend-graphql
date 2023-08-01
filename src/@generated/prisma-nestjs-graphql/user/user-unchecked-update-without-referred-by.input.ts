import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumUserRoleFieldUpdateOperationsInput } from '../prisma/enum-user-role-field-update-operations.input';
import { EnumUserTypeFieldUpdateOperationsInput } from '../prisma/enum-user-type-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumUserStatusFieldUpdateOperationsInput } from '../prisma/enum-user-status-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumThemeFieldUpdateOperationsInput } from '../prisma/enum-theme-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutReferredByNestedInput } from './user-unchecked-update-many-without-referred-by-nested.input';
import { CheckInUncheckedUpdateManyWithoutUserNestedInput } from '../check-in/check-in-unchecked-update-many-without-user-nested.input';
import { AccountUncheckedUpdateManyWithoutUserNestedInput } from '../account/account-unchecked-update-many-without-user-nested.input';
import { TransactionUncheckedUpdateManyWithoutUserNestedInput } from '../transaction/transaction-unchecked-update-many-without-user-nested.input';
import { PointTransactionUncheckedUpdateManyWithoutUserNestedInput } from '../point-transaction/point-transaction-unchecked-update-many-without-user-nested.input';
import { OrderUncheckedUpdateManyWithoutOrderByNestedInput } from '../order/order-unchecked-update-many-without-order-by-nested.input';
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from '../session/session-unchecked-update-many-without-user-nested.input';
import { HotelUncheckedUpdateManyWithoutCreatedByNestedInput } from '../hotel/hotel-unchecked-update-many-without-created-by-nested.input';
import { ProgramUncheckedUpdateManyWithoutParticipantNestedInput } from '../program/program-unchecked-update-many-without-participant-nested.input';
import { ProjectUncheckedUpdateManyWithoutInvestorsNestedInput } from '../project/project-unchecked-update-many-without-investors-nested.input';
import { RewardUncheckedUpdateManyWithoutClaimersNestedInput } from '../reward/reward-unchecked-update-many-without-claimers-nested.input';
import { UserNotificationUncheckedUpdateManyWithoutUserNestedInput } from '../user-notification/user-notification-unchecked-update-many-without-user-nested.input';
import { ProgramUncheckedUpdateManyWithoutCreatedByNestedInput } from '../program/program-unchecked-update-many-without-created-by-nested.input';
import { FileUncheckedUpdateManyWithoutCreatedByNestedInput } from '../file/file-unchecked-update-many-without-created-by-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutReferredByInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    addressId?: IntFieldUpdateOperationsInput;

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
    schoolId?: NullableIntFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumThemeFieldUpdateOperationsInput, {nullable:true})
    theme?: EnumThemeFieldUpdateOperationsInput;

    @HideField()
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByNestedInput;

    @HideField()
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    PointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    orders?: OrderUncheckedUpdateManyWithoutOrderByNestedInput;

    @HideField()
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    hotelsCreated?: HotelUncheckedUpdateManyWithoutCreatedByNestedInput;

    @HideField()
    programsParticipation?: ProgramUncheckedUpdateManyWithoutParticipantNestedInput;

    @HideField()
    projectsInvestment?: ProjectUncheckedUpdateManyWithoutInvestorsNestedInput;

    @HideField()
    claimedRewards?: RewardUncheckedUpdateManyWithoutClaimersNestedInput;

    @HideField()
    userNotifications?: UserNotificationUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    programsCreated?: ProgramUncheckedUpdateManyWithoutCreatedByNestedInput;

    @HideField()
    filesCreated?: FileUncheckedUpdateManyWithoutCreatedByNestedInput;
}
