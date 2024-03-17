import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class UserReferralPercentage {
  @Field()
  userReferralType: string;

  @Field()
  userCount: number;

  @Field(() => Float)
  userPercentage: number;
}
