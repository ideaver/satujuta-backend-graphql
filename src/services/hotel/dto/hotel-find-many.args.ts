import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  HotelWhereInput,
  HotelOrderByWithRelationInput,
  HotelWhereUniqueInput,
  HotelScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class HotelFindManyArgs {
  // @Field(() => HotelSelect, { nullable: true })
  select?: Prisma.HotelSelect;

  @Field(() => HotelWhereInput, { nullable: true })
  @Type(() => HotelWhereInput)
  where?: InstanceType<typeof HotelWhereInput>;
  @Field(() => [HotelOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<HotelOrderByWithRelationInput>;
  // @Field(() => HotelWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<HotelWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [HotelScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof HotelScalarFieldEnum>;
}
