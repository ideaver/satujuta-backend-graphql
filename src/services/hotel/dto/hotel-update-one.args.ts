import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HotelUpdateInput, HotelWhereUniqueInput } from 'src/@generated';

@InputType()
export class HotelUpdateOneArgs {
  select?: Prisma.HotelSelect;

  @Field(() => HotelUpdateInput, { nullable: false })
  @Type(() => HotelUpdateInput)
  data!: InstanceType<typeof HotelUpdateInput>;
  @Field(() => HotelWhereUniqueInput, { nullable: false })
  @Type(() => HotelWhereUniqueInput)
  where!: Prisma.AtLeast<HotelWhereUniqueInput, 'id'>;
}
