import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingCreateInput } from './shipping-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShippingArgs {

    @Field(() => ShippingCreateInput, {nullable:false})
    @Type(() => ShippingCreateInput)
    data!: ShippingCreateInput;
}
