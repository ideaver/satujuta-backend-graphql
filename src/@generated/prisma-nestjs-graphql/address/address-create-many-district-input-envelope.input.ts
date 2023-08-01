import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateManyDistrictInput } from './address-create-many-district.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressCreateManyDistrictInputEnvelope {

    @Field(() => [AddressCreateManyDistrictInput], {nullable:false})
    @Type(() => AddressCreateManyDistrictInput)
    data!: Array<AddressCreateManyDistrictInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
