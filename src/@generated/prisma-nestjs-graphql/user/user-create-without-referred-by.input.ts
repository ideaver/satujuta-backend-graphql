import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserRole } from '../prisma/user-role.enum';
import { UserType } from '../prisma/user-type.enum';
import { UserStatus } from '../prisma/user-status.enum';
import { Theme } from '../prisma/theme.enum';
import { AddressCreateNestedOneWithoutUserInput } from '../address/address-create-nested-one-without-user.input';
import { UserCreateNestedManyWithoutReferredByInput } from './user-create-nested-many-without-referred-by.input';
import { CheckInCreateNestedManyWithoutUserInput } from '../check-in/check-in-create-nested-many-without-user.input';
import { SchoolCreateNestedOneWithoutStudentsInput } from '../school/school-create-nested-one-without-students.input';
import { AccountCreateNestedManyWithoutUserInput } from '../account/account-create-nested-many-without-user.input';
import { TransactionCreateNestedManyWithoutUserInput } from '../transaction/transaction-create-nested-many-without-user.input';
import { PointTransactionCreateNestedManyWithoutUserInput } from '../point-transaction/point-transaction-create-nested-many-without-user.input';
import { OrderCreateNestedManyWithoutOrderByInput } from '../order/order-create-nested-many-without-order-by.input';
import { SessionCreateNestedManyWithoutUserInput } from '../session/session-create-nested-many-without-user.input';
import { HotelCreateNestedManyWithoutCreatedByInput } from '../hotel/hotel-create-nested-many-without-created-by.input';
import { ProgramCreateNestedManyWithoutParticipantInput } from '../program/program-create-nested-many-without-participant.input';
import { ProjectCreateNestedManyWithoutInvestorsInput } from '../project/project-create-nested-many-without-investors.input';
import { RewardCreateNestedManyWithoutClaimersInput } from '../reward/reward-create-nested-many-without-claimers.input';
import { UserNotificationCreateNestedManyWithoutUserInput } from '../user-notification/user-notification-create-nested-many-without-user.input';
import { ProgramCreateNestedManyWithoutCreatedByInput } from '../program/program-create-nested-many-without-created-by.input';
import { FileCreateNestedManyWithoutCreatedByInput } from '../file/file-create-nested-many-without-created-by.input';

@InputType()
export class UserCreateWithoutReferredByInput {

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
    status?: keyof typeof UserStatus;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Theme, {nullable:true})
    theme?: keyof typeof Theme;

    @Field(() => AddressCreateNestedOneWithoutUserInput, {nullable:false})
    address!: AddressCreateNestedOneWithoutUserInput;

    @HideField()
    referredUsers?: UserCreateNestedManyWithoutReferredByInput;

    @HideField()
    checkIns?: CheckInCreateNestedManyWithoutUserInput;

    @Field(() => SchoolCreateNestedOneWithoutStudentsInput, {nullable:true})
    school?: SchoolCreateNestedOneWithoutStudentsInput;

    @HideField()
    accounts?: AccountCreateNestedManyWithoutUserInput;

    @HideField()
    transactions?: TransactionCreateNestedManyWithoutUserInput;

    @HideField()
    PointTransactions?: PointTransactionCreateNestedManyWithoutUserInput;

    @HideField()
    orders?: OrderCreateNestedManyWithoutOrderByInput;

    @HideField()
    sessions?: SessionCreateNestedManyWithoutUserInput;

    @HideField()
    hotelsCreated?: HotelCreateNestedManyWithoutCreatedByInput;

    @HideField()
    programsParticipation?: ProgramCreateNestedManyWithoutParticipantInput;

    @HideField()
    projectsInvestment?: ProjectCreateNestedManyWithoutInvestorsInput;

    @HideField()
    claimedRewards?: RewardCreateNestedManyWithoutClaimersInput;

    @HideField()
    userNotifications?: UserNotificationCreateNestedManyWithoutUserInput;

    @HideField()
    programsCreated?: ProgramCreateNestedManyWithoutCreatedByInput;

    @HideField()
    filesCreated?: FileCreateNestedManyWithoutCreatedByInput;
}
