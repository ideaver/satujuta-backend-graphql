import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { HotelWhereUniqueInput, UserWhereUniqueInput } from 'src/@generated';
import { HotelSelect } from '../model/hotel-select.input';

@InputType()
export class HotelFindUniqueArgs {
  @Field(() => HotelSelect, { nullable: true })
  select?: HotelSelect | null;

  @Field(() => HotelSelect, { nullable: true })
  include?: HotelSelect | null;

  @Field(() => HotelWhereUniqueInput, { nullable: false })
  @Type(() => HotelWhereUniqueInput)
  where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id' | 'addressId'>;
}
