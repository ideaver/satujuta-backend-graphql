import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class IsMaintenance {
  @Field()
  maintenance: boolean;
}
