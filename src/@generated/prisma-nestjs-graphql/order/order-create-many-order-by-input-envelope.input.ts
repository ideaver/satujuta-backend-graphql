import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyOrderByInput } from './order-create-many-order-by.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyOrderByInputEnvelope {

    @Field(() => [OrderCreateManyOrderByInput], {nullable:false})
    @Type(() => OrderCreateManyOrderByInput)
    data!: Array<OrderCreateManyOrderByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
