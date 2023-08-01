import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HotelWhereInput } from './hotel-where.input';
import { Type } from 'class-transformer';
import { HotelOrderByWithRelationInput } from './hotel-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HotelWhereUniqueInput } from './hotel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HotelScalarFieldEnum } from './hotel-scalar-field.enum';

@ArgsType()
export class FindFirstHotelOrThrowArgs {

    @Field(() => HotelWhereInput, {nullable:true})
    @Type(() => HotelWhereInput)
    where?: HotelWhereInput;

    @Field(() => [HotelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HotelOrderByWithRelationInput>;

    @Field(() => HotelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HotelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
