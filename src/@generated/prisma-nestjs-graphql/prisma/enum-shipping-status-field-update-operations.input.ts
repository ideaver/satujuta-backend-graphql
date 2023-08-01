import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingStatus } from './shipping-status.enum';

@InputType()
export class EnumShippingStatusFieldUpdateOperationsInput {

    @Field(() => ShippingStatus, {nullable:true})
    set?: keyof typeof ShippingStatus;
}
