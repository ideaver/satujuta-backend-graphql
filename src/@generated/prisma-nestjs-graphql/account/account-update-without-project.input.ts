import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAccountCategoryFieldUpdateOperationsInput } from '../prisma/enum-account-category-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAccountsNestedInput } from '../user/user-update-one-required-without-accounts-nested.input';
import { TransactionUpdateManyWithoutAccountNestedInput } from '../transaction/transaction-update-many-without-account-nested.input';
import { BankUpdateOneWithoutAccountNestedInput } from '../bank/bank-update-one-without-account-nested.input';

@InputType()
export class AccountUpdateWithoutProjectInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    accountNumber?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    balance?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAccountCategoryFieldUpdateOperationsInput, {nullable:true})
    accountCategory?: EnumAccountCategoryFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAccountsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput;

    @Field(() => TransactionUpdateManyWithoutAccountNestedInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutAccountNestedInput;

    @Field(() => BankUpdateOneWithoutAccountNestedInput, {nullable:true})
    bankAccount?: BankUpdateOneWithoutAccountNestedInput;
}
