import { UserCreateInput } from './user-create.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(UserCreateInput) {
  @Field(() => Int)
  id: number;
}
