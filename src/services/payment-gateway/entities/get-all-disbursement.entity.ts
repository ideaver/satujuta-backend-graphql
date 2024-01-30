import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Disbursement } from 'src/@generated';

@ObjectType()
export class GetAllDisbursement {
  @Field(() => Int)
  total_data: number;

  @Field(() => Int)
  data_per_page: number;

  @Field(() => Int)
  total_page: number;

  @Field(() => Int)
  page: number;

  @Field(() => [Disbursement])
  data: Disbursement[];
}
