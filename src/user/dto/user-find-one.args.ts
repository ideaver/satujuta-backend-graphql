import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserSelect } from '../model/user-select.input';
import { UserWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql';

@InputType()
export class UserFindUniqueArgs {
  @Field(() => UserSelect, { nullable: true })
  select?: UserSelect | null;

  @Field(() => UserSelect, { nullable: true })
  include?: UserSelect | null;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;
}
