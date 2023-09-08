import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CityWhereUniqueInput } from 'src/@generated';

@InputType()
export class CityFindUniqueArgs {
  select?: Prisma.CitySelect;

  @Field(() => CityWhereUniqueInput, { nullable: false })
  @Type(() => CityWhereUniqueInput)
  where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
