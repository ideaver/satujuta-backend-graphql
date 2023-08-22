import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { DistrictCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class DistrictCreateArgs {
  select?: Prisma.DistrictSelect;

  @Field(() => DistrictCreateInput, { nullable: false })
  @Type(() => DistrictCreateInput)
  data!: DistrictCreateInput;
  //maybe use field middleware
}
