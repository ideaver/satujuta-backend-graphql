import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserType } from '../prisma/user-type.enum';
import { UserStatus } from '../prisma/user-status.enum';
import { Theme } from '../prisma/theme.enum';
import { UserUncheckedCreateNestedManyWithoutReferredByInput } from './user-unchecked-create-nested-many-without-referred-by.input';
import { CheckInUncheckedCreateNestedManyWithoutUserInput } from '../check-in/check-in-unchecked-create-nested-many-without-user.input';
import { TransactionUncheckedCreateNestedManyWithoutUserInput } from '../transaction/transaction-unchecked-create-nested-many-without-user.input';
import { PointTransactionUncheckedCreateNestedManyWithoutUserInput } from '../point-transaction/point-transaction-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutOrderByInput } from '../order/order-unchecked-create-nested-many-without-order-by.input';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';
import { HotelUncheckedCreateNestedManyWithoutCreatedByInput } from '../hotel/hotel-unchecked-create-nested-many-without-created-by.input';
import { ProgramUncheckedCreateNestedManyWithoutParticipantInput } from '../program/program-unchecked-create-nested-many-without-participant.input';
import { ProjectUncheckedCreateNestedManyWithoutInvestorsInput } from '../project/project-unchecked-create-nested-many-without-investors.input';
import { RewardUncheckedCreateNestedManyWithoutClaimersInput } from '../reward/reward-unchecked-create-nested-many-without-claimers.input';
import { UserNotificationUncheckedCreateNestedManyWithoutUserInput } from '../user-notification/user-notification-unchecked-create-nested-many-without-user.input';
import { ProgramUncheckedCreateNestedManyWithoutCreatedByInput } from '../program/program-unchecked-create-nested-many-without-created-by.input';
import { FileUncheckedCreateNestedManyWithoutCreatedByInput } from '../file/file-unchecked-create-nested-many-without-created-by.input';

@InputType()
export class UserUncheckedCreateWithoutAccountsInput {

    @HideField()
    id?: string;

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

    @HideField()
    addressId!: number;

    @Field(() => UserRole, {nullable:true})
    userRole?: keyof typeof UserRole;

    @Field(() => UserType, {nullable:false})
    userType!: keyof typeof UserType;

    @Field(() => String, {nullable:true})
    @Validator.IsUrl({ require_protocol: true })
    avatarUrl?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    whatsappNumber!: string;

    @HideField()
    whatsappVerifiedAt?: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    @Validator.MaxLength(15)
    @Validator.IsAlphanumeric()
    password!: string;

    @HideField()
    referredById?: string;

    @HideField()
    status?: keyof typeof UserStatus;

    @HideField()
    schoolId?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Theme, {nullable:true})
    theme?: keyof typeof Theme;

    @HideField()
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByInput;

    @HideField()
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    PointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    orders?: OrderUncheckedCreateNestedManyWithoutOrderByInput;

    @HideField()
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    hotelsCreated?: HotelUncheckedCreateNestedManyWithoutCreatedByInput;

    @HideField()
    programsParticipation?: ProgramUncheckedCreateNestedManyWithoutParticipantInput;

    @HideField()
    projectsInvestment?: ProjectUncheckedCreateNestedManyWithoutInvestorsInput;

    @HideField()
    claimedRewards?: RewardUncheckedCreateNestedManyWithoutClaimersInput;

    @HideField()
    userNotifications?: UserNotificationUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    programsCreated?: ProgramUncheckedCreateNestedManyWithoutCreatedByInput;

    @HideField()
    filesCreated?: FileUncheckedCreateNestedManyWithoutCreatedByInput;
}
