import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankCreateManyInput } from './bank-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBankArgs {

    @Field(() => [BankCreateManyInput], {nullable:false})
    @Type(() => BankCreateManyInput)
    data!: Array<BankCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
