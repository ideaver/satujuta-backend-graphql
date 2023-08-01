import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateManyProgramImageInput } from './images-create-many-program-image.input';
import { Type } from 'class-transformer';

@InputType()
export class ImagesCreateManyProgramImageInputEnvelope {

    @Field(() => [ImagesCreateManyProgramImageInput], {nullable:false})
    @Type(() => ImagesCreateManyProgramImageInput)
    data!: Array<ImagesCreateManyProgramImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
