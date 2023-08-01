import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CheckInCreateManyHotelInput } from './check-in-create-many-hotel.input';
import { Type } from 'class-transformer';

@InputType()
export class CheckInCreateManyHotelInputEnvelope {

    @Field(() => [CheckInCreateManyHotelInput], {nullable:false})
    @Type(() => CheckInCreateManyHotelInput)
    data!: Array<CheckInCreateManyHotelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
