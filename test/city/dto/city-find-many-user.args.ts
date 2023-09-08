import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { UserRole, UserStatus } from 'src/@generated';

@ObjectType()
export class CityFindManyUser {
  @Field(() => Int)
  cityId: number;

  @Field()
  cityName: string;

  @Field(() => Int)
  userCount: number;
}

@InputType()
export class CityFindManyUserArgs {
  @Field(() => UserRole, { nullable: true })
  userRole?: keyof typeof UserRole;

  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;
}
