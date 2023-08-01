import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardUpdateWithoutImagesInput } from './reward-update-without-images.input';
import { Type } from 'class-transformer';
import { RewardCreateWithoutImagesInput } from './reward-create-without-images.input';
import { RewardWhereInput } from './reward-where.input';

@InputType()
export class RewardUpsertWithoutImagesInput {

    @Field(() => RewardUpdateWithoutImagesInput, {nullable:false})
    @Type(() => RewardUpdateWithoutImagesInput)
    update!: RewardUpdateWithoutImagesInput;

    @Field(() => RewardCreateWithoutImagesInput, {nullable:false})
    @Type(() => RewardCreateWithoutImagesInput)
    create!: RewardCreateWithoutImagesInput;

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;
}
