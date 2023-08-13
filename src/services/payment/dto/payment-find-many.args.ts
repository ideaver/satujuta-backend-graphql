import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  PaymentWhereInput,
  PaymentOrderByWithRelationInput,
  PaymentWhereUniqueInput,
  PaymentScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class PaymentFindManyArgs {
  // @Field(() => PaymentSelect, { nullable: true })
  select?: Prisma.PaymentSelect;

  @Field(() => PaymentWhereInput, {nullable:true})
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<PaymentOrderByWithRelationInput>;
  // @Field(() => PaymentWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [PaymentScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}
