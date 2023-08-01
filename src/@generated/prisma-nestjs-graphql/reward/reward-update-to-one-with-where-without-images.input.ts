import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';
import { Type } from 'class-transformer';
import { RewardUpdateWithoutImagesInput } from './reward-update-without-images.input';

@InputType()
export class RewardUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;

    @Field(() => RewardUpdateWithoutImagesInput, {nullable:false})
    @Type(() => RewardUpdateWithoutImagesInput)
    data!: RewardUpdateWithoutImagesInput;
}
