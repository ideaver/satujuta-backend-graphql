import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RewardWhereInput } from './reward-where.input';
import { Type } from 'class-transformer';
import { RewardOrderByWithRelationInput } from './reward-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RewardWhereUniqueInput } from './reward-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RewardScalarFieldEnum } from './reward-scalar-field.enum';

@ArgsType()
export class FindFirstRewardOrThrowArgs {

    @Field(() => RewardWhereInput, {nullable:true})
    @Type(() => RewardWhereInput)
    where?: RewardWhereInput;

    @Field(() => [RewardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RewardOrderByWithRelationInput>;

    @Field(() => RewardWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RewardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RewardScalarFieldEnum>;
}
