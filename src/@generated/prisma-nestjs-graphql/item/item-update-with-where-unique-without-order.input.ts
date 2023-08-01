import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutOrderInput } from './item-update-without-order.input';

@InputType()
export class ItemUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;

    @Field(() => ItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => ItemUpdateWithoutOrderInput)
    data!: ItemUpdateWithoutOrderInput;
}
