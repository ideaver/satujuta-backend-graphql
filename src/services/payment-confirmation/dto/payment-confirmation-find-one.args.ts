import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { PaymentConfirmationWhereUniqueInput } from 'src/@generated';

@InputType()
export class PaymentConfirmationFindUniqueArgs {
  select?: Prisma.PaymentConfirmationSelect;

    @Field(() => PaymentConfirmationWhereUniqueInput, {nullable:false})
    @Type(() => PaymentConfirmationWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentConfirmationWhereUniqueInput, 'id'>;
}
