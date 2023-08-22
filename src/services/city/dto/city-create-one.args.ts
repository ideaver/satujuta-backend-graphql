import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CityCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class CityCreateArgs {
  select?: Prisma.CitySelect;

  @Field(() => CityCreateInput, { nullable: false })
  @Type(() => CityCreateInput)
  data!: CityCreateInput;
}
