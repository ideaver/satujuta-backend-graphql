import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutUserInput {

    @Field(() => AddressCreateWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    create?: AddressCreateWithoutUserInput;

    @Field(() => AddressCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
