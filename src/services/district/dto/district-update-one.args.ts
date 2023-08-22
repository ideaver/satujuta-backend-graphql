import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DistrictUpdateInput, DistrictWhereUniqueInput } from 'src/@generated';

@InputType()
export class DistrictUpdateOneArgs {
  select?: Prisma.DistrictSelect;

  @Field(() => DistrictUpdateInput, { nullable: false })
  @Type(() => DistrictUpdateInput)
  data!: InstanceType<typeof DistrictUpdateInput>;
  @Field(() => DistrictWhereUniqueInput, { nullable: false })
  @Type(() => DistrictWhereUniqueInput)
  where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
