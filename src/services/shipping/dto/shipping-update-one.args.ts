import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShippingUpdateInput, ShippingWhereUniqueInput } from 'src/@generated';

@InputType()
export class ShippingUpdateOneArgs {

    select?: Prisma.ShippingSelect;

    @Field(() => ShippingUpdateInput, {nullable:false})
    @Type(() => ShippingUpdateInput)
    data!: InstanceType<typeof ShippingUpdateInput>;
    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id'>;
}
