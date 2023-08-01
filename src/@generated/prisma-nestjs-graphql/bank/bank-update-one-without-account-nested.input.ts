import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankCreateWithoutAccountInput } from './bank-create-without-account.input';
import { Type } from 'class-transformer';
import { BankCreateOrConnectWithoutAccountInput } from './bank-create-or-connect-without-account.input';
import { BankUpsertWithoutAccountInput } from './bank-upsert-without-account.input';
import { BankWhereInput } from './bank-where.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { BankUpdateToOneWithWhereWithoutAccountInput } from './bank-update-to-one-with-where-without-account.input';

@InputType()
export class BankUpdateOneWithoutAccountNestedInput {

    @Field(() => BankCreateWithoutAccountInput, {nullable:true})
    @Type(() => BankCreateWithoutAccountInput)
    create?: BankCreateWithoutAccountInput;

    @Field(() => BankCreateOrConnectWithoutAccountInput, {nullable:true})
    @Type(() => BankCreateOrConnectWithoutAccountInput)
    connectOrCreate?: BankCreateOrConnectWithoutAccountInput;

    @Field(() => BankUpsertWithoutAccountInput, {nullable:true})
    @Type(() => BankUpsertWithoutAccountInput)
    upsert?: BankUpsertWithoutAccountInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    disconnect?: BankWhereInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    delete?: BankWhereInput;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    @Type(() => BankWhereUniqueInput)
    connect?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => BankUpdateToOneWithWhereWithoutAccountInput, {nullable:true})
    @Type(() => BankUpdateToOneWithWhereWithoutAccountInput)
    update?: BankUpdateToOneWithWhereWithoutAccountInput;
}
