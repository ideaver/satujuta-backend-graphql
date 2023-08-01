import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutProjectInput } from './account-create-without-project.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutProjectInput } from './account-create-or-connect-without-project.input';
import { AccountUpsertWithoutProjectInput } from './account-upsert-without-project.input';
import { Prisma } from '@prisma/client';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateToOneWithWhereWithoutProjectInput } from './account-update-to-one-with-where-without-project.input';

@InputType()
export class AccountUpdateOneRequiredWithoutProjectNestedInput {

    @Field(() => AccountCreateWithoutProjectInput, {nullable:true})
    @Type(() => AccountCreateWithoutProjectInput)
    create?: AccountCreateWithoutProjectInput;

    @Field(() => AccountCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutProjectInput)
    connectOrCreate?: AccountCreateOrConnectWithoutProjectInput;

    @Field(() => AccountUpsertWithoutProjectInput, {nullable:true})
    @Type(() => AccountUpsertWithoutProjectInput)
    upsert?: AccountUpsertWithoutProjectInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;

    @Field(() => AccountUpdateToOneWithWhereWithoutProjectInput, {nullable:true})
    @Type(() => AccountUpdateToOneWithWhereWithoutProjectInput)
    update?: AccountUpdateToOneWithWhereWithoutProjectInput;
}
