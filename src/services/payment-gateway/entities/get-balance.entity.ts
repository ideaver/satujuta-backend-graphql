import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class GetBalance {
  @Field()
  balance: string;
}
