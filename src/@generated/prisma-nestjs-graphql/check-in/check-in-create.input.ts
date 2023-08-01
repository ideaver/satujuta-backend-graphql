import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCheckInsInput } from '../user/user-create-nested-one-without-check-ins.input';
import { HotelCreateNestedOneWithoutCheckInsInput } from '../hotel/hotel-create-nested-one-without-check-ins.input';

@InputType()
export class CheckInCreateInput {

    @Field(() => Date, {nullable:true})
    checkInAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCheckInsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCheckInsInput;

    @Field(() => HotelCreateNestedOneWithoutCheckInsInput, {nullable:false})
    hotel!: HotelCreateNestedOneWithoutCheckInsInput;
}
