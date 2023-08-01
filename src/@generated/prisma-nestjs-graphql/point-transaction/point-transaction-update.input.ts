import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { EnumPointTypeFieldUpdateOperationsInput } from '../prisma/enum-point-type-field-update-operations.input';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPointTransactionsNestedInput } from '../user/user-update-one-required-without-point-transactions-nested.input';

@InputType()
export class PointTransactionUpdateInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => EnumPointTypeFieldUpdateOperationsInput, {nullable:true})
    pointType?: EnumPointTypeFieldUpdateOperationsInput;

    @Field(() => EnumTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    currentBalance?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPointTransactionsNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutPointTransactionsNestedInput;
}
