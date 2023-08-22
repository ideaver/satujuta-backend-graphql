import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import {
  SubdistrictUpdateInput,
  SubdistrictWhereUniqueInput,
} from 'src/@generated';

@InputType()
export class SubdistrictUpdateOneArgs {
  select?: Prisma.SubdistrictSelect;

  @Field(() => SubdistrictUpdateInput, { nullable: false })
  @Type(() => SubdistrictUpdateInput)
  data!: InstanceType<typeof SubdistrictUpdateInput>;
  @Field(() => SubdistrictWhereUniqueInput, { nullable: false })
  @Type(() => SubdistrictWhereUniqueInput)
  where!: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
