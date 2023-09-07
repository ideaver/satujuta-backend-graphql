import { Field, Float, ObjectType } from "@nestjs/graphql";


@ObjectType()
class BatchPayload {
  @Field(() => Float, { nullable: true })
  count: number;
}

export default BatchPayload;