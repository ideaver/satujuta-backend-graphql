import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderUpdateInput, OrderWhereUniqueInput } from 'src/@generated';

@InputType()
export class OrderUpdateOneArgs {

    select?: Prisma.OrderSelect;

    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    data!: InstanceType<typeof OrderUpdateInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
