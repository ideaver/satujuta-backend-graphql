import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateManyHotelImageInput } from './images-create-many-hotel-image.input';
import { Type } from 'class-transformer';

@InputType()
export class ImagesCreateManyHotelImageInputEnvelope {

    @Field(() => [ImagesCreateManyHotelImageInput], {nullable:false})
    @Type(() => ImagesCreateManyHotelImageInput)
    data!: Array<ImagesCreateManyHotelImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
