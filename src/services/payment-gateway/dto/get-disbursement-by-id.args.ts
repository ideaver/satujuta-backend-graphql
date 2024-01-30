import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetDisbursementById {
  @Field(() => Int, {
    description: 'The id of the disbursement.',
  })
  id: number;
}
