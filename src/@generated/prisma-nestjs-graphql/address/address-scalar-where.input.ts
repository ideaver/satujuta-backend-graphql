import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AddressScalarWhereInput {

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    AND?: Array<AddressScalarWhereInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    OR?: Array<AddressScalarWhereInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    NOT?: Array<AddressScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    districtId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    postalCodeId?: IntFilter;
}
