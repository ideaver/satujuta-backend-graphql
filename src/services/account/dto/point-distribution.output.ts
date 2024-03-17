import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PointDistribution {
  @Field(() => String, { nullable: true })
  label: string;

  @Field(() => Int, { nullable: true })
  count: number;
}
