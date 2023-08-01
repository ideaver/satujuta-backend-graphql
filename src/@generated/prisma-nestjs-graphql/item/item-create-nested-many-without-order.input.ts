import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutOrderInput } from './item-create-without-order.input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutOrderInput } from './item-create-or-connect-without-order.input';
import { ItemCreateManyOrderInputEnvelope } from './item-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';

@InputType()
export class ItemCreateNestedManyWithoutOrderInput {

    @Field(() => [ItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => ItemCreateWithoutOrderInput)
    create?: Array<ItemCreateWithoutOrderInput>;

    @Field(() => [ItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;

    @Field(() => ItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => ItemCreateManyOrderInputEnvelope)
    createMany?: ItemCreateManyOrderInputEnvelope;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;
}
