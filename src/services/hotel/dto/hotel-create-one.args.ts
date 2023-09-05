import { ArgsType, Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { HotelCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@ArgsType()
export class HotelCreateArgs {
  select?: Prisma.HotelSelect;

  @Field(() => HotelCreateInput, { nullable: false })
  @Type(() => HotelCreateInput)
  data!: HotelCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
