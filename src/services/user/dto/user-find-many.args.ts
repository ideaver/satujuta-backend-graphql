import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  UserWhereInput,
  UserOrderByWithRelationInput,
  UserWhereUniqueInput,
  UserScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class UserFindManyArgs {
  select?: Prisma.UserSelect | null;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
