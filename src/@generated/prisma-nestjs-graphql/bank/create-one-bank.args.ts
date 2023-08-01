import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankCreateInput } from './bank-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBankArgs {

    @Field(() => BankCreateInput, {nullable:false})
    @Type(() => BankCreateInput)
    data!: BankCreateInput;
}
