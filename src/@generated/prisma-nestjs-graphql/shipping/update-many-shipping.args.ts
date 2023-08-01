import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingUpdateManyMutationInput } from './shipping-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShippingWhereInput } from './shipping-where.input';

@ArgsType()
export class UpdateManyShippingArgs {

    @Field(() => ShippingUpdateManyMutationInput, {nullable:false})
    @Type(() => ShippingUpdateManyMutationInput)
    data!: ShippingUpdateManyMutationInput;

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;
}
