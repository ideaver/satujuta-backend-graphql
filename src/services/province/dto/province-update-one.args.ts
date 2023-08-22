import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProvinceUpdateInput, ProvinceWhereUniqueInput } from 'src/@generated';

@InputType()
export class ProvinceUpdateOneArgs {
  select?: Prisma.ProvinceSelect;

  @Field(() => ProvinceUpdateInput, { nullable: false })
  @Type(() => ProvinceUpdateInput)
  data!: InstanceType<typeof ProvinceUpdateInput>;
  @Field(() => ProvinceWhereUniqueInput, { nullable: false })
  @Type(() => ProvinceWhereUniqueInput)
  where!: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id'>;
}
