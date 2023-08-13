import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PaymentUpdateInput, PaymentWhereUniqueInput } from 'src/@generated';

@InputType()
export class PaymentUpdateOneArgs {

    select?: Prisma.PaymentSelect;

    @Field(() => PaymentUpdateInput, {nullable:false})
    @Type(() => PaymentUpdateInput)
    data!: InstanceType<typeof PaymentUpdateInput>;
    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id'>;
}
