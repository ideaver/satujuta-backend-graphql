import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankUpdateWithoutAccountInput } from './bank-update-without-account.input';
import { Type } from 'class-transformer';
import { BankCreateWithoutAccountInput } from './bank-create-without-account.input';
import { BankWhereInput } from './bank-where.input';

@InputType()
export class BankUpsertWithoutAccountInput {

    @Field(() => BankUpdateWithoutAccountInput, {nullable:false})
    @Type(() => BankUpdateWithoutAccountInput)
    update!: BankUpdateWithoutAccountInput;

    @Field(() => BankCreateWithoutAccountInput, {nullable:false})
    @Type(() => BankCreateWithoutAccountInput)
    create!: BankCreateWithoutAccountInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;
}
