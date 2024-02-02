import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetBankInfo {
  @Field()
  bank_code: string;

  @Field()
  name: string;

  @Field(() => Int)
  fee: number;

  @Field(() => Int)
  queue: number;

  @Field()
  status: string;
}
