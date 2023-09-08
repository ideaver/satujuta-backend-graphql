import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  CityWhereInput,
  CityOrderByWithRelationInput,
  CityWhereUniqueInput,
  CityScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class CityFindManyArgs {
  // @Field(() => CitySelect, { nullable: true })
  select?: Prisma.CitySelect;

  @Field(() => CityWhereInput, { nullable: true })
  @Type(() => CityWhereInput)
  where?: InstanceType<typeof CityWhereInput>;
  @Field(() => [CityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CityOrderByWithRelationInput>;
  // @Field(() => CityWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [CityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
