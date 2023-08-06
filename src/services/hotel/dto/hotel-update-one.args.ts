import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HotelUpdateInput, HotelWhereUniqueInput } from 'src/@generated';
import { HotelSelect } from '../model/hotel-select.input';

@InputType()
export class HotelUpdateOneArgs {
  @Field(() => HotelSelect, { nullable: true })
  select?: HotelSelect | null;

  @Field(() => HotelSelect, { nullable: true })
  include?: HotelSelect | null;

  @Field(() => HotelUpdateInput, { nullable: false })
  @Type(() => HotelUpdateInput)
  data!: HotelUpdateInput;

  @Field(() => HotelWhereUniqueInput, { nullable: false })
  @Type(() => HotelWhereUniqueInput)
  where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
