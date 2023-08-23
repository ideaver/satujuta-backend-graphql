import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  BankWhereInput,
  BankOrderByWithRelationInput,
  BankWhereUniqueInput,
  BankScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class BankFindManyArgs {
  // @Field(() => BankSelect, { nullable: true })
  select?: Prisma.BankSelect;

  @Field(() => BankWhereInput, { nullable: true })
  @Type(() => BankWhereInput)
  where?: InstanceType<typeof BankWhereInput>;
  @Field(() => [BankOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BankOrderByWithRelationInput>;
  // @Field(() => BankWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<BankWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BankScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BankScalarFieldEnum>;
}
