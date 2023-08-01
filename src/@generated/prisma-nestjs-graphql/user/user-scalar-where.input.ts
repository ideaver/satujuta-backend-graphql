import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumUserRoleFilter } from '../prisma/enum-user-role-filter.input';
import { EnumUserTypeFilter } from '../prisma/enum-user-type-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumUserStatusFilter } from '../prisma/enum-user-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumThemeFilter } from '../prisma/enum-theme-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @HideField()
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @HideField()
    addressId?: IntFilter;

    @Field(() => EnumUserRoleFilter, {nullable:true})
    userRole?: EnumUserRoleFilter;

    @Field(() => EnumUserTypeFilter, {nullable:true})
    userType?: EnumUserTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarUrl?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    whatsappNumber?: StringFilter;

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
}
