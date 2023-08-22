import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ProvinceWhereInput,
  ProvinceOrderByWithRelationInput,
  ProvinceWhereUniqueInput,
  ProvinceScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ProvinceFindManyArgs {
  // @Field(() => ProvinceSelect, { nullable: true })
  select?: Prisma.ProvinceSelect;

  @Field(() => ProvinceWhereInput, { nullable: true })
  @Type(() => ProvinceWhereInput)
  where?: InstanceType<typeof ProvinceWhereInput>;
  @Field(() => [ProvinceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProvinceOrderByWithRelationInput>;
  // @Field(() => ProvinceWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ProvinceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
