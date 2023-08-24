import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  WithdrawalRequestWhereInput,
  WithdrawalRequestOrderByWithRelationInput,
  WithdrawalRequestWhereUniqueInput,
  WithdrawalRequestScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class WithdrawalRequestFindManyArgs {
  // @Field(() => WithdrawalRequestSelect, { nullable: true })
  select?: Prisma.WithdrawalRequestSelect;

  @Field(() => WithdrawalRequestWhereInput, { nullable: true })
  @Type(() => WithdrawalRequestWhereInput)
  where?: InstanceType<typeof WithdrawalRequestWhereInput>;
  @Field(() => [WithdrawalRequestOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
  // @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [WithdrawalRequestScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
