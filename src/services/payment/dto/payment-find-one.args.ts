import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { PaymentWhereUniqueInput } from 'src/@generated';

@InputType()
export class PaymentFindUniqueArgs {
  select?: Prisma.PaymentSelect;

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id'>;
}
