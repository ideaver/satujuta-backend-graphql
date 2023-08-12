import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserSelect } from '../model/user-select.input';
import { UserUpdateInput, UserWhereUniqueInput } from 'src/@generated';

@InputType()
export class UserUpdateOneArgs {
  @Field(() => UserSelect, { nullable: true })
  select?: Prisma.UserSelect | null;

  @Field(() => UserSelect, { nullable: true })
  include?: UserSelect | null;

  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  data!: UserUpdateInput;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;
}
