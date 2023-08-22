import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ProvinceCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ProvinceCreateArgs {
  select?: Prisma.ProvinceSelect;

  @Field(() => ProvinceCreateInput, { nullable: false })
  @Type(() => ProvinceCreateInput)
  data!: ProvinceCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
