import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ImagesUncheckedUpdateManyWithoutRewardImageNestedInput } from '../images/images-unchecked-update-many-without-reward-image-nested.input';
import { UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput } from '../user/user-unchecked-update-many-without-claimed-rewards-nested.input';

@InputType()
export class RewardUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    pointCost?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ImagesUncheckedUpdateManyWithoutRewardImageNestedInput, {nullable:true})
    images?: ImagesUncheckedUpdateManyWithoutRewardImageNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput, {nullable:true})
    claimers?: UserUncheckedUpdateManyWithoutClaimedRewardsNestedInput;
}
