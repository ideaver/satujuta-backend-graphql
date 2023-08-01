import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesScalarWhereInput } from './images-scalar-where.input';
import { Type } from 'class-transformer';
import { ImagesUpdateManyMutationInput } from './images-update-many-mutation.input';

@InputType()
export class ImagesUpdateManyWithWhereWithoutRewardImageInput {

    @Field(() => ImagesScalarWhereInput, {nullable:false})
    @Type(() => ImagesScalarWhereInput)
    where!: ImagesScalarWhereInput;

    @Field(() => ImagesUpdateManyMutationInput, {nullable:false})
    @Type(() => ImagesUpdateManyMutationInput)
    data!: ImagesUpdateManyMutationInput;
}
