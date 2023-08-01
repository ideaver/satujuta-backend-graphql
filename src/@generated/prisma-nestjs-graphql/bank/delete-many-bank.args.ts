import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBankArgs {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;
}
