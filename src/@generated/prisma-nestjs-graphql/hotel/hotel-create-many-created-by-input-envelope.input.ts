import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HotelCreateManyCreatedByInput } from './hotel-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class HotelCreateManyCreatedByInputEnvelope {

    @Field(() => [HotelCreateManyCreatedByInput], {nullable:false})
    @Type(() => HotelCreateManyCreatedByInput)
    data!: Array<HotelCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
