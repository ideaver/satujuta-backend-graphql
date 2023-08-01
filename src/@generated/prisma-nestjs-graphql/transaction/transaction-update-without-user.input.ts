import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { EnumTransactionStatusFieldUpdateOperationsInput } from '../prisma/enum-transaction-status-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { EnumTransactionCategoryFieldUpdateOperationsInput } from '../prisma/enum-transaction-category-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AccountUpdateOneRequiredWithoutTransactionsNestedInput } from '../account/account-update-one-required-without-transactions-nested.input';
import { PaymentUpdateOneWithoutTransactionNestedInput } from '../payment/payment-update-one-without-transaction-nested.input';

@InputType()
export class TransactionUpdateWithoutUserInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => EnumTransactionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumTransactionStatusFieldUpdateOperationsInput;

    @Field(() => EnumTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput;

    @Field(() => EnumTransactionCategoryFieldUpdateOperationsInput, {nullable:true})
    transactionCategory?: EnumTransactionCategoryFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    currentBalance?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AccountUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => PaymentUpdateOneWithoutTransactionNestedInput, {nullable:true})
    payment?: PaymentUpdateOneWithoutTransactionNestedInput;
}
