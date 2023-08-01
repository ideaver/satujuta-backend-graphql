import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingCreateManyInput } from './shipping-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShippingArgs {

    @Field(() => [ShippingCreateManyInput], {nullable:false})
    @Type(() => ShippingCreateManyInput)
    data!: Array<ShippingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
