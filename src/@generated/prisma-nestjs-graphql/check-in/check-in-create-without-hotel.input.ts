import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCheckInsInput } from '../user/user-create-nested-one-without-check-ins.input';

@InputType()
export class CheckInCreateWithoutHotelInput {

    @Field(() => Date, {nullable:true})
    checkInAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCheckInsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCheckInsInput;
}
