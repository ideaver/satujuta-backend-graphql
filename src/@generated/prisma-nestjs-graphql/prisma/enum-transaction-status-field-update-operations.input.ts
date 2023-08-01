import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatus } from './transaction-status.enum';

@InputType()
export class EnumTransactionStatusFieldUpdateOperationsInput {

    @Field(() => TransactionStatus, {nullable:true})
    set?: keyof typeof TransactionStatus;
}
