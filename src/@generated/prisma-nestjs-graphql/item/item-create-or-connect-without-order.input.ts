import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCreateWithoutOrderInput } from './item-create-without-order.input';

@InputType()
export class ItemCreateOrConnectWithoutOrderInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;

    @Field(() => ItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => ItemCreateWithoutOrderInput)
    create!: ItemCreateWithoutOrderInput;
}
