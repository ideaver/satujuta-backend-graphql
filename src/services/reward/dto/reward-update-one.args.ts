import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RewardUpdateInput, RewardWhereUniqueInput } from 'src/@generated';

@InputType()
export class RewardUpdateOneArgs {

    select?: Prisma.RewardSelect;

    @Field(() => RewardUpdateInput, {nullable:false})
    @Type(() => RewardUpdateInput)
    data!: InstanceType<typeof RewardUpdateInput>;
    @Field(() => RewardWhereUniqueInput, {nullable:false})
    @Type(() => RewardWhereUniqueInput)
    where!: Prisma.AtLeast<RewardWhereUniqueInput, 'id'>;
}
