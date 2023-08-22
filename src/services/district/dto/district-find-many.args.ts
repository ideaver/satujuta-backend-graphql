import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  DistrictWhereInput,
  DistrictOrderByWithRelationInput,
  DistrictWhereUniqueInput,
  DistrictScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class DistrictFindManyArgs {
  // @Field(() => DistrictSelect, { nullable: true })
  select?: Prisma.DistrictSelect;

  @Field(() => DistrictWhereInput, { nullable: true })
  @Type(() => DistrictWhereInput)
  where?: InstanceType<typeof DistrictWhereInput>;
  @Field(() => [DistrictOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<DistrictOrderByWithRelationInput>;
  // @Field(() => DistrictWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [DistrictScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
