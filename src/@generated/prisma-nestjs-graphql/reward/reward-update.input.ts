import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ImagesUpdateManyWithoutRewardImageNestedInput } from '../images/images-update-many-without-reward-image-nested.input';
import { UserUpdateManyWithoutClaimedRewardsNestedInput } from '../user/user-update-many-without-claimed-rewards-nested.input';

@InputType()
export class RewardUpdateInput {

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

    @Field(() => ImagesUpdateManyWithoutRewardImageNestedInput, {nullable:true})
    images?: ImagesUpdateManyWithoutRewardImageNestedInput;

    @Field(() => UserUpdateManyWithoutClaimedRewardsNestedInput, {nullable:true})
    claimers?: UserUpdateManyWithoutClaimedRewardsNestedInput;
}
