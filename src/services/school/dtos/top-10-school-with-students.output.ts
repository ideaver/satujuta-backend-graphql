import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Top10SchoolWithStudents {
  @Field()
  schoolId: number;

  @Field()
  schoolName: string;

  @Field()
  userCount: number;
}
