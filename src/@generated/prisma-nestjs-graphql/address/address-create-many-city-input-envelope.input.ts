import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateManyCityInput } from './address-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressCreateManyCityInputEnvelope {

    @Field(() => [AddressCreateManyCityInput], {nullable:false})
    @Type(() => AddressCreateManyCityInput)
    data!: Array<AddressCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
