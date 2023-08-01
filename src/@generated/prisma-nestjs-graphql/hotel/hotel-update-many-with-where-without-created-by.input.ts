import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelScalarWhereInput } from './hotel-scalar-where.input';
import { Type } from 'class-transformer';
import { HotelUpdateManyMutationInput } from './hotel-update-many-mutation.input';

@InputType()
export class HotelUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => HotelScalarWhereInput, {nullable:false})
    @Type(() => HotelScalarWhereInput)
    where!: HotelScalarWhereInput;

    @Field(() => HotelUpdateManyMutationInput, {nullable:false})
    @Type(() => HotelUpdateManyMutationInput)
    data!: HotelUpdateManyMutationInput;
}
