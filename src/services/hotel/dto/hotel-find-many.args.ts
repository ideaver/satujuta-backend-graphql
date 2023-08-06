import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';

import {
  HotelWhereUniqueInput,
  HotelOrderByRelationAggregateInput,
  HotelScalarFieldEnum,
  HotelOrderByWithRelationInput,
} from 'src/@generated';
import { HotelSelect } from '../model/hotel-select.input';

@InputType()
export class HotelFindManyArgs {
  @Field(() => HotelSelect, { nullable: true })
  select?: HotelSelect | null;

  @Field(() => HotelSelect, { nullable: true })
  include?: HotelSelect | null;

  @Field(() => HotelWhereUniqueInput, { nullable: true })
  @Type(() => HotelWhereUniqueInput)
  where?: HotelWhereUniqueInput;

  @Field(() => [HotelOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HotelOrderByWithRelationInput>;

  @Field(() => HotelWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [HotelScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
