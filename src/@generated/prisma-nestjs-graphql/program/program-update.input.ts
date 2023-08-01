import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ImagesUpdateManyWithoutProgramImageNestedInput } from '../images/images-update-many-without-program-image-nested.input';
import { UserUpdateOneRequiredWithoutProgramsCreatedNestedInput } from '../user/user-update-one-required-without-programs-created-nested.input';
import { UserUpdateManyWithoutProgramsParticipationNestedInput } from '../user/user-update-many-without-programs-participation-nested.input';
import { ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput } from '../program-category/program-category-update-one-required-without-programs-nested.input';

@InputType()
export class ProgramUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ImagesUpdateManyWithoutProgramImageNestedInput, {nullable:true})
    Images?: ImagesUpdateManyWithoutProgramImageNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProgramsCreatedNestedInput, {nullable:true})
    createdBy?: UserUpdateOneRequiredWithoutProgramsCreatedNestedInput;

    @Field(() => UserUpdateManyWithoutProgramsParticipationNestedInput, {nullable:true})
    participant?: UserUpdateManyWithoutProgramsParticipationNestedInput;

    @Field(() => ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput, {nullable:true})
    category?: ProgramCategoryUpdateOneRequiredWithoutProgramsNestedInput;
}
