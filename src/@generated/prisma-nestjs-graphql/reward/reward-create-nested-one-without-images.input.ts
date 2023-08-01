import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardCreateWithoutImagesInput } from './reward-create-without-images.input';
import { Type } from 'class-transformer';
import { RewardCreateOrConnectWithoutImagesInput } from './reward-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';

@InputType()
export class RewardCreateNestedOneWithoutImagesInput {

    @Field(() => RewardCreateWithoutImagesInput, {nullable:true})
    @Type(() => RewardCreateWithoutImagesInput)
    create?: RewardCreateWithoutImagesInput;

    @Field(() => RewardCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => RewardCreateOrConnectWithoutImagesInput)
    connectOrCreate?: RewardCreateOrConnectWithoutImagesInput;

    @Field(() => RewardWhereUniqueInput, {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
