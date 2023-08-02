import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { HotelCreateInput } from 'src/@generated';
import { HotelSelect } from '../model/hotel-select.input';

@InputType()
export class HotelCreateArgs {
  @Field(() => HotelSelect, { nullable: true })
  select?: HotelSelect | null;

  @Field(() => HotelSelect, { nullable: true })
  include?: HotelSelect | null;

  @Field(() => HotelCreateInput, { nullable: false })
  @Type(() => HotelCreateInput)
  data!: HotelCreateInput;
}
