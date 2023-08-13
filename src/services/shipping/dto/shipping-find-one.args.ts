import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ShippingWhereUniqueInput } from 'src/@generated';

@InputType()
export class ShippingFindUniqueArgs {
  select?: Prisma.ShippingSelect;

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    @Type(() => ShippingWhereUniqueInput)
    where!: Prisma.AtLeast<ShippingWhereUniqueInput, 'id'>;
}
