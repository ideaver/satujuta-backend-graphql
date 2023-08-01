import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateManyRewardImageInput } from './images-create-many-reward-image.input';
import { Type } from 'class-transformer';

@InputType()
export class ImagesCreateManyRewardImageInputEnvelope {

    @Field(() => [ImagesCreateManyRewardImageInput], {nullable:false})
    @Type(() => ImagesCreateManyRewardImageInput)
    data!: Array<ImagesCreateManyRewardImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
