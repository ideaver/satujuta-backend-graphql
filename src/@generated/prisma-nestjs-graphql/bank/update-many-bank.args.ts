import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankUpdateManyMutationInput } from './bank-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BankWhereInput } from './bank-where.input';

@ArgsType()
export class UpdateManyBankArgs {

    @Field(() => BankUpdateManyMutationInput, {nullable:false})
    @Type(() => BankUpdateManyMutationInput)
    data!: BankUpdateManyMutationInput;

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;
}
