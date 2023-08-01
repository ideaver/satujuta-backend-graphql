import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateManyProjectImageInput } from './images-create-many-project-image.input';
import { Type } from 'class-transformer';

@InputType()
export class ImagesCreateManyProjectImageInputEnvelope {

    @Field(() => [ImagesCreateManyProjectImageInput], {nullable:false})
    @Type(() => ImagesCreateManyProjectImageInput)
    data!: Array<ImagesCreateManyProjectImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
