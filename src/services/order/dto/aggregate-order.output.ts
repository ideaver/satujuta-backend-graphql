import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import {
  OrderAvgAggregate,
  OrderCountAggregate,
  OrderMaxAggregate,
  OrderMinAggregate,
  OrderSumAggregate,
} from 'src/@generated';

@ObjectType()
export class AggregateOrder {
  @Field(() => OrderCountAggregate, { nullable: true })
  _count?: OrderCountAggregate;

  @Field(() => OrderAvgAggregate, { nullable: true })
  _avg?: OrderAvgAggregate;

  @Field(() => OrderSumAggregate, { nullable: true })
  _sum?: OrderSumAggregate;

  @Field(() => OrderMinAggregate, { nullable: true })
  _min?: OrderMinAggregate;

  @Field(() => OrderMaxAggregate, { nullable: true })
  _max?: OrderMaxAggregate;
}
