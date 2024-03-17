import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Top10CitiesWithStudents {
  @Field()
  city: string;

  @Field()
  userCount: number;
}
