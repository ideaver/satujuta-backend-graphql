import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PointTransactionGroupPercentage {
  @Field()
  pointGroup: string;

  @Field()
  userCount: number;

  @Field()
  percentage: number;
}
