import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CityUpdateInput, CityWhereUniqueInput } from 'src/@generated';

@InputType()
export class CityUpdateOneArgs {
  select?: Prisma.CitySelect;

  @Field(() => CityUpdateInput, { nullable: false })
  @Type(() => CityUpdateInput)
  data!: InstanceType<typeof CityUpdateInput>;
  @Field(() => CityWhereUniqueInput, { nullable: false })
  @Type(() => CityWhereUniqueInput)
  where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
