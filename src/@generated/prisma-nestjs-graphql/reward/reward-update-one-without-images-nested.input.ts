import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RewardCreateWithoutImagesInput } from './reward-create-without-images.input';
import { Type } from 'class-transformer';
import { RewardCreateOrConnectWithoutImagesInput } from './reward-create-or-connect-without-images.input';
import { RewardUpsertWithoutImagesInput } from './reward-upsert-without-images.input';
import { RewardWhereInput } from './reward-where.input';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { RewardUpdateToOneWithWhereWithoutImagesInput } from './reward-update-to-one-with-where-without-images.input';

@InputType()
export class RewardUpdateOneWithoutImagesNestedInput {

    @Field(() => RewardCreateWithoutImagesInput, {nullable:true})
    @Type(() => RewardCreateWithoutImagesInput)
    create?: RewardCreateWithoutImagesInput;

    @Field(() => RewardCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => RewardCreateOrConnectWithoutImagesInput)
    connectOrCreate?: RewardCreateOrConnectWithoutImagesInput;

    @Field(() => RewardUpsertWithoutImagesInput, {nullable:true})
    @Type(() => RewardUpsertWithoutImagesInput)
    upsert?: RewardUpsertWithoutImagesInput;

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    disconnect?: RewardWhereInput;

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    delete?: RewardWhereInput;

    @Field(() => RewardWhereUniqueInput, {nullable:true})
    @Type(() => RewardWhereUniqueInput)
    connect?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => RewardUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => RewardUpdateToOneWithWhereWithoutImagesInput)
    update?: RewardUpdateToOneWithWhereWithoutImagesInput;
}
