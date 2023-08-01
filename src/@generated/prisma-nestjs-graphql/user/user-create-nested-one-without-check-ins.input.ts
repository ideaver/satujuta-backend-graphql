import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCheckInsInput } from './user-create-without-check-ins.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCheckInsInput } from './user-create-or-connect-without-check-ins.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCheckInsInput {

    @Field(() => UserCreateWithoutCheckInsInput, {nullable:true})
    @Type(() => UserCreateWithoutCheckInsInput)
    create?: UserCreateWithoutCheckInsInput;

    @Field(() => UserCreateOrConnectWithoutCheckInsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCheckInsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'addressId' | 'whatsappNumber'>;
}
