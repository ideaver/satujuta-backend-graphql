import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Type } from 'class-transformer';
import { RewardCreateWithoutImagesInput } from './reward-create-without-images.input';

@InputType()
export class RewardCreateOrConnectWithoutImagesInput {

    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardCreateWithoutImagesInput, {nullable:false})
    @Type(() => RewardCreateWithoutImagesInput)
    create!: RewardCreateWithoutImagesInput;
}
