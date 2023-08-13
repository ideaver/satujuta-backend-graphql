import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PaymentConfirmationUpdateInput, PaymentConfirmationWhereUniqueInput } from 'src/@generated';

@InputType()
export class PaymentConfirmationUpdateOneArgs {

    select?: Prisma.PaymentConfirmationSelect;

    @Field(() => PaymentConfirmationUpdateInput, {nullable:false})
    @Type(() => PaymentConfirmationUpdateInput)
    data!: InstanceType<typeof PaymentConfirmationUpdateInput>;
    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id'>;
}
