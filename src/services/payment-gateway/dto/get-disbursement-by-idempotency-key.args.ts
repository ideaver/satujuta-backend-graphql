import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetDisbursementByIdempotencyKeyArgs {
  @Field(() => String, {
    description: 'The idempotency key of the disbursement.',
  })
  idempotency_key: number;
}
