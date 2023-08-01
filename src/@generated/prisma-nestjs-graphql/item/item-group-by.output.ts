import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { ItemCountAggregate } from './item-count-aggregate.output';
import { ItemAvgAggregate } from './item-avg-aggregate.output';
import { ItemSumAggregate } from './item-sum-aggregate.output';
import { ItemMinAggregate } from './item-min-aggregate.output';
import { ItemMaxAggregate } from './item-max-aggregate.output';

@ObjectType()
export class ItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => UserRole, {nullable:false})
    userRole!: keyof typeof UserRole;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: ItemCountAggregate;

    @Field(() => ItemAvgAggregate, {nullable:true})
    _avg?: ItemAvgAggregate;

    @Field(() => ItemSumAggregate, {nullable:true})
    _sum?: ItemSumAggregate;

    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: ItemMinAggregate;

    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: ItemMaxAggregate;
}
