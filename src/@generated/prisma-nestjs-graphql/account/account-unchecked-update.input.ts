import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAccountCategoryFieldUpdateOperationsInput } from '../prisma/enum-account-category-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutAccountNestedInput } from '../transaction/transaction-unchecked-update-many-without-account-nested.input';
import { ProjectUncheckedUpdateOneWithoutAccountNestedInput } from '../project/project-unchecked-update-one-without-account-nested.input';
import { BankUncheckedUpdateOneWithoutAccountNestedInput } from '../bank/bank-unchecked-update-one-without-account-nested.input';

@InputType()
export class AccountUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAccountCategoryFieldUpdateOperationsInput, {nullable:true})
    accountCategory?: EnumAccountCategoryFieldUpdateOperationsInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutAccountNestedInput, {nullable:true})
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput;

    @Field(() => ProjectUncheckedUpdateOneWithoutAccountNestedInput, {nullable:true})
    project?: ProjectUncheckedUpdateOneWithoutAccountNestedInput;

    @Field(() => BankUncheckedUpdateOneWithoutAccountNestedInput, {nullable:true})
    bankAccount?: BankUncheckedUpdateOneWithoutAccountNestedInput;
}
