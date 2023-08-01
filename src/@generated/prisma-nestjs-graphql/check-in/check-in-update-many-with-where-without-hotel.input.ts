import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInScalarWhereInput } from './check-in-scalar-where.input';
import { Type } from 'class-transformer';
import { CheckInUpdateManyMutationInput } from './check-in-update-many-mutation.input';

@InputType()
export class CheckInUpdateManyWithWhereWithoutHotelInput {

    @Field(() => CheckInScalarWhereInput, {nullable:false})
    @Type(() => CheckInScalarWhereInput)
    where!: CheckInScalarWhereInput;

    @Field(() => CheckInUpdateManyMutationInput, {nullable:false})
    @Type(() => CheckInUpdateManyMutationInput)
    data!: CheckInUpdateManyMutationInput;
}
