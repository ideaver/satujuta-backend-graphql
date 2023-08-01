import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { AccountUpdateOneRequiredWithoutBankAccountNestedInput } from '../account/account-update-one-required-without-bank-account-nested.input';

@InputType()
export class BankUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    logoUrl?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    accountNumber?: IntFieldUpdateOperationsInput;

    @Field(() => AccountUpdateOneRequiredWithoutBankAccountNestedInput, {nullable:true})
    account?: AccountUpdateOneRequiredWithoutBankAccountNestedInput;
}
