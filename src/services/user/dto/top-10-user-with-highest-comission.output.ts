import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Top10UserWithHighestComission {
  @Field()
  userId: string;

  @Field()
  userFirstName: string;

  @Field()
  userLastName: string;

  @Field(() => Float)
  amount: number;
}
