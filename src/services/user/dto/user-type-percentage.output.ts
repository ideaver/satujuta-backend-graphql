import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class UserTypePercentage {
  @Field()
  userCountType: string;

  @Field()
  userCount: number;

  @Field(() => Float)
  userPercentage: number;
}
