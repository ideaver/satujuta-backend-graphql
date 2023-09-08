import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserUpdateInput, UserWhereUniqueInput } from 'src/@generated';

@InputType()
export class UserUpdateOneArgs {
  select?: Prisma.UserSelect | null;

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
