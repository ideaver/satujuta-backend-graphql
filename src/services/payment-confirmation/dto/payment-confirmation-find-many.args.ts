import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  PaymentConfirmationWhereInput,
  PaymentConfirmationOrderByWithRelationInput,
  PaymentConfirmationWhereUniqueInput,
  PaymentConfirmationScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class PaymentConfirmationFindManyArgs {
  // @Field(() => PaymentConfirmationSelect, { nullable: true })
  select?: Prisma.PaymentConfirmationSelect;

  @Field(() => PaymentConfirmationWhereInput, {nullable:true})
  @Type(() => PaymentConfirmationWhereInput)
  where?: InstanceType<typeof PaymentConfirmationWhereInput>;
  @Field(() => [PaymentConfirmationOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;
  // @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [PaymentConfirmationScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
}
