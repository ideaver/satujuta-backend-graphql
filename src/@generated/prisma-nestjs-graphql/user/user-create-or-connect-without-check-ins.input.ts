import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCheckInsInput } from './user-create-without-check-ins.input';

@InputType()
export class UserCreateOrConnectWithoutCheckInsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;

    @Field(() => UserCreateWithoutCheckInsInput, {nullable:false})
    @Type(() => UserCreateWithoutCheckInsInput)
    create!: UserCreateWithoutCheckInsInput;
}
