import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentConfirmationWhereInput } from './payment-confirmation-where.input';
import { Type } from 'class-transformer';
import { PaymentConfirmationOrderByWithRelationInput } from './payment-confirmation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationWhereUniqueInput } from './payment-confirmation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentConfirmationScalarFieldEnum } from './payment-confirmation-scalar-field.enum';

@ArgsType()
export class FindFirstPaymentConfirmationOrThrowArgs {

    @Field(() => PaymentConfirmationWhereInput, {nullable:true})
    @Type(() => PaymentConfirmationWhereInput)
    where?: PaymentConfirmationWhereInput;

    @Field(() => [PaymentConfirmationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentConfirmationOrderByWithRelationInput>;

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PaymentConfirmationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PaymentConfirmationScalarFieldEnum>;
}
