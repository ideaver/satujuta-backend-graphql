import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';

@InputType()
export class DistrictWhereInput {

    @Field(() => [DistrictWhereInput], {nullable:true})
    AND?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    OR?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    NOT?: Array<DistrictWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;
}
