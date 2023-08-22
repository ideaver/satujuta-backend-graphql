import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SubdistrictWhereUniqueInput } from 'src/@generated';

@InputType()
export class SubdistrictFindUniqueArgs {
  select?: Prisma.SubdistrictSelect;

  @Field(() => SubdistrictWhereUniqueInput, { nullable: false })
  @Type(() => SubdistrictWhereUniqueInput)
  where!: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
