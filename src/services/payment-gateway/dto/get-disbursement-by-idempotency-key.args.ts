import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetDisbursementByIdempotencyKey {
  @Field(() => String, {
    description: 'The idempotency key of the disbursement.',
  })
  idempotency_key: number;
}
