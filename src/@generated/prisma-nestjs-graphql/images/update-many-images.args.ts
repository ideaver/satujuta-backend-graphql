import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesUpdateManyMutationInput } from './images-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ImagesWhereInput } from './images-where.input';

@ArgsType()
export class UpdateManyImagesArgs {

    @Field(() => ImagesUpdateManyMutationInput, {nullable:false})
    @Type(() => ImagesUpdateManyMutationInput)
    data!: ImagesUpdateManyMutationInput;

    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: ImagesWhereInput;
}
