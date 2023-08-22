import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ProvinceWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProvinceFindUniqueArgs {
  select?: Prisma.ProvinceSelect;

  @Field(() => ProvinceWhereUniqueInput, { nullable: false })
  @Type(() => ProvinceWhereUniqueInput)
  where!: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id'>;
}
