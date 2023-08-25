import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  WithdrawalRequestWhereInput,
  WithdrawalRequestOrderByWithRelationInput,
  WithdrawalRequestWhereUniqueInput,
  WithdrawalRequestScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class WithdrawalRequestFindFirstArgs {
  select?: Prisma.WithdrawalRequestSelect;
  @Field(() => WithdrawalRequestWhereInput, { nullable: true })
  @Type(() => WithdrawalRequestWhereInput)
  where?: InstanceType<typeof WithdrawalRequestWhereInput>;
  @Field(() => [WithdrawalRequestOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<WithdrawalRequestOrderByWithRelationInput>;
  @Field(() => WithdrawalRequestWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<WithdrawalRequestWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [WithdrawalRequestScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
