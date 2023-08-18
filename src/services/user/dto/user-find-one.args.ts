import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from 'src/@generated';

@InputType()
export class UserFindUniqueArgs {
  select?: Prisma.UserSelect | null;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'addressId' | 'whatsappNumber'
  >;
}
