import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReferredByInput } from './user-update-without-referred-by.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutReferredByInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserUpdateWithoutReferredByInput, {nullable:false})
    @Type(() => UserUpdateWithoutReferredByInput)
    data!: UserUpdateWithoutReferredByInput;
}
