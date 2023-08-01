import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateNestedOneWithoutCheckInsInput } from '../hotel/hotel-create-nested-one-without-check-ins.input';

@InputType()
export class CheckInCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    checkInAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HotelCreateNestedOneWithoutCheckInsInput, {nullable:false})
    hotel!: HotelCreateNestedOneWithoutCheckInsInput;
}
