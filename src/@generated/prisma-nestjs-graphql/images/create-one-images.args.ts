import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesCreateInput } from './images-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImagesArgs {

    @Field(() => ImagesCreateInput, {nullable:false})
    @Type(() => ImagesCreateInput)
    data!: ImagesCreateInput;
}
