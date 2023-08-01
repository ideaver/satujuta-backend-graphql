import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyImagesArgs {

    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: ImagesWhereInput;
}
