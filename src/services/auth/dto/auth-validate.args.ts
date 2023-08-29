import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class AuthValidateArgs {
  select?: Prisma.UserSelect;

  @Field(() => String, { description: 'Masukkan email' })
  email: string;

  @Field(() => String, { description: 'Masukkan password' })
  password: string;
}
