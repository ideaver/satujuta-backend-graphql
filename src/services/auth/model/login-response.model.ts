import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/@generated';

@ObjectType()
export class LoginResponse {
  @Field(() => String, { description: 'Akses token jwt' })
  accessToken: string;

  @Field(() => User)
  user: User;
}
