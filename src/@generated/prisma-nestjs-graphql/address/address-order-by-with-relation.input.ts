import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { DistrictOrderByWithRelationInput } from '../district/district-order-by-with-relation.input';
import { PostalCodeOrderByWithRelationInput } from '../postal-code/postal-code-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HotelOrderByWithRelationInput } from '../hotel/hotel-order-by-with-relation.input';
import { SchoolOrderByWithRelationInput } from '../school/school-order-by-with-relation.input';
import { ShippingOrderByWithRelationInput } from '../shipping/shipping-order-by-with-relation.input';

@InputType()
export class AddressOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    districtId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCodeId?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => DistrictOrderByWithRelationInput, {nullable:true})
    district?: DistrictOrderByWithRelationInput;

    @Field(() => PostalCodeOrderByWithRelationInput, {nullable:true})
    postalCode?: PostalCodeOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => HotelOrderByWithRelationInput, {nullable:true})
    hotel?: HotelOrderByWithRelationInput;

    @Field(() => SchoolOrderByWithRelationInput, {nullable:true})
    school?: SchoolOrderByWithRelationInput;

    @Field(() => ShippingOrderByWithRelationInput, {nullable:true})
    Shipping?: ShippingOrderByWithRelationInput;
}
