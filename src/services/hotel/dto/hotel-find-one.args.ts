import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { HotelWhereUniqueInput } from 'src/@generated';

@InputType()
export class HotelFindUniqueArgs {
  select?: Prisma.HotelSelect;

  @Field(() => HotelWhereUniqueInput, { nullable: false })
  @Type(() => HotelWhereUniqueInput)
  where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id'>;
}
