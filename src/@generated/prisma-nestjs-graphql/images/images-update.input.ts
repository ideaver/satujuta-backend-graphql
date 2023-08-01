import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumFileTypeFieldUpdateOperationsInput } from '../prisma/enum-file-type-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HotelUpdateOneWithoutImagesNestedInput } from '../hotel/hotel-update-one-without-images-nested.input';
import { ProgramUpdateOneWithoutImagesNestedInput } from '../program/program-update-one-without-images-nested.input';
import { RewardUpdateOneWithoutImagesNestedInput } from '../reward/reward-update-one-without-images-nested.input';
import { ProjectUpdateOneWithoutImagesNestedInput } from '../project/project-update-one-without-images-nested.input';

@InputType()
export class ImagesUpdateInput {

    @Field(() => EnumFileTypeFieldUpdateOperationsInput, {nullable:true})
    fileType?: EnumFileTypeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    filesize?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HotelUpdateOneWithoutImagesNestedInput, {nullable:true})
    hotelImage?: HotelUpdateOneWithoutImagesNestedInput;

    @Field(() => ProgramUpdateOneWithoutImagesNestedInput, {nullable:true})
    programImage?: ProgramUpdateOneWithoutImagesNestedInput;

    @Field(() => RewardUpdateOneWithoutImagesNestedInput, {nullable:true})
    rewardImage?: RewardUpdateOneWithoutImagesNestedInput;

    @Field(() => ProjectUpdateOneWithoutImagesNestedInput, {nullable:true})
    projectImage?: ProjectUpdateOneWithoutImagesNestedInput;
}
