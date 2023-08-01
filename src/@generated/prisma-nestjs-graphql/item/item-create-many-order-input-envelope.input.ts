import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateManyOrderInput } from './item-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemCreateManyOrderInputEnvelope {

    @Field(() => [ItemCreateManyOrderInput], {nullable:false})
    @Type(() => ItemCreateManyOrderInput)
    data!: Array<ItemCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
