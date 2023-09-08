import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  AccountWhereInput,
  AccountOrderByWithRelationInput,
  AccountWhereUniqueInput,
  AccountScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class AccountFindFirstArgs {
  select?: Prisma.AccountSelect;
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithRelationInput>;
  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AccountScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
