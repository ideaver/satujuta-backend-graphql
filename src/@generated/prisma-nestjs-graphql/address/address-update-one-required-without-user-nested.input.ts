import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutUserInput } from './address-create-without-user.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutUserInput } from './address-create-or-connect-without-user.input';
import { AddressUpsertWithoutUserInput } from './address-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutUserInput } from './address-update-to-one-with-where-without-user.input';

@InputType()
export class AddressUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => AddressCreateWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateWithoutUserInput)
    create?: AddressCreateWithoutUserInput;

    @Field(() => AddressCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutUserInput)
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput;

    @Field(() => AddressUpsertWithoutUserInput, {nullable:true})
    @Type(() => AddressUpsertWithoutUserInput)
    upsert?: AddressUpsertWithoutUserInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutUserInput)
    update?: AddressUpdateToOneWithWhereWithoutUserInput;
}
