import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserSelect } from '../model/user-select.input';
import { UserCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class UserCreateArgs {
  @Field(() => UserSelect, { nullable: true })
  select?: Prisma.UserSelect | null;

  @Field(() => UserSelect, { nullable: true })
  include?: UserSelect | null;

  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
