import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutOrderInput } from './item-create-without-order.input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutOrderInput } from './item-create-or-connect-without-order.input';
import { ItemUpsertWithWhereUniqueWithoutOrderInput } from './item-upsert-with-where-unique-without-order.input';
import { ItemCreateManyOrderInputEnvelope } from './item-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemWhereUniqueInput } from './item-where-unique.input';
import { ItemUpdateWithWhereUniqueWithoutOrderInput } from './item-update-with-where-unique-without-order.input';
import { ItemUpdateManyWithWhereWithoutOrderInput } from './item-update-many-with-where-without-order.input';
import { ItemScalarWhereInput } from './item-scalar-where.input';

@InputType()
export class ItemUpdateManyWithoutOrderNestedInput {

    @Field(() => [ItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => ItemCreateWithoutOrderInput)
    create?: Array<ItemCreateWithoutOrderInput>;

    @Field(() => [ItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutOrderInput>;

    @Field(() => [ItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => ItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => ItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => ItemCreateManyOrderInputEnvelope)
    createMany?: ItemCreateManyOrderInputEnvelope;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemWhereUniqueInput, 'id'>>;

    @Field(() => [ItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => ItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<ItemUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [ItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => ItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<ItemUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    @Type(() => ItemScalarWhereInput)
    deleteMany?: Array<ItemScalarWhereInput>;
}
