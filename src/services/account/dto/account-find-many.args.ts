import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  AccountWhereInput,
  AccountOrderByWithRelationInput,
  AccountWhereUniqueInput,
  AccountScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class AccountFindManyArgs {
  // @Field(() => AccountSelect, { nullable: true })
  select?: Prisma.AccountSelect;

  @Field(() => AccountWhereInput, {nullable:true})
  @Type(() => AccountWhereInput)
  where?: InstanceType<typeof AccountWhereInput>;
  @Field(() => [AccountOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<AccountOrderByWithRelationInput>;
  // @Field(() => AccountWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [AccountScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
