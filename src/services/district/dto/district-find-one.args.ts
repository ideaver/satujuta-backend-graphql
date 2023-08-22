import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { DistrictWhereUniqueInput } from 'src/@generated';

@InputType()
export class DistrictFindUniqueArgs {
  select?: Prisma.DistrictSelect;

  @Field(() => DistrictWhereUniqueInput, { nullable: false })
  @Type(() => DistrictWhereUniqueInput)
  where!: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
