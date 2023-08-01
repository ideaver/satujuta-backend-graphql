import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateManyPostalCodeInput } from './address-create-many-postal-code.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressCreateManyPostalCodeInputEnvelope {

    @Field(() => [AddressCreateManyPostalCodeInput], {nullable:false})
    @Type(() => AddressCreateManyPostalCodeInput)
    data!: Array<AddressCreateManyPostalCodeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
