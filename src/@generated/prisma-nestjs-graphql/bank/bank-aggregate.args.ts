import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BankWhereInput } from './bank-where.input';
import { Type } from 'class-transformer';
import { BankOrderByWithRelationInput } from './bank-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BankWhereUniqueInput } from './bank-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BankCountAggregateInput } from './bank-count-aggregate.input';
import { BankAvgAggregateInput } from './bank-avg-aggregate.input';
import { BankSumAggregateInput } from './bank-sum-aggregate.input';
import { BankMinAggregateInput } from './bank-min-aggregate.input';
import { BankMaxAggregateInput } from './bank-max-aggregate.input';

@ArgsType()
export class BankAggregateArgs {

    @Field(() => BankWhereInput, {nullable:true})
    @Type(() => BankWhereInput)
    where?: BankWhereInput;

    @Field(() => [BankOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BankOrderByWithRelationInput>;

    @Field(() => BankWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id' | 'accountId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BankCountAggregateInput, {nullable:true})
    _count?: BankCountAggregateInput;

    @Field(() => BankAvgAggregateInput, {nullable:true})
    _avg?: BankAvgAggregateInput;

    @Field(() => BankSumAggregateInput, {nullable:true})
    _sum?: BankSumAggregateInput;

    @Field(() => BankMinAggregateInput, {nullable:true})
    _min?: BankMinAggregateInput;

    @Field(() => BankMaxAggregateInput, {nullable:true})
    _max?: BankMaxAggregateInput;
}
