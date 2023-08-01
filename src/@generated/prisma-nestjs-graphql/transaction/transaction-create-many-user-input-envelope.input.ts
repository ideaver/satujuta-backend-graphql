import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyUserInput } from './transaction-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyUserInputEnvelope {

    @Field(() => [TransactionCreateManyUserInput], {nullable:false})
    @Type(() => TransactionCreateManyUserInput)
    data!: Array<TransactionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
