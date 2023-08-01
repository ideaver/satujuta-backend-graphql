import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesCreateManyInput } from './images-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImagesArgs {

    @Field(() => [ImagesCreateManyInput], {nullable:false})
    @Type(() => ImagesCreateManyInput)
    data!: Array<ImagesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
