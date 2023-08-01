import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { BankUpdateWithoutAccountInput } from './bank-update-without-account.input';

@InputType()
export class BankUpdateToOneWithWhereWithoutAccountInput {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => BankUpdateWithoutAccountInput, {nullable:false})
    @Type(() => BankUpdateWithoutAccountInput)
    data!: BankUpdateWithoutAccountInput;
}
