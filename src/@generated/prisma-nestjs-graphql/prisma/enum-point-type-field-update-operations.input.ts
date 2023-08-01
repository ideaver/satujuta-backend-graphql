import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointType } from './point-type.enum';

@InputType()
export class EnumPointTypeFieldUpdateOperationsInput {

    @Field(() => PointType, {nullable:true})
    set?: keyof typeof PointType;
}
