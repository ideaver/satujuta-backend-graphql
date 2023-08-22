import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SubdistrictCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class SubdistrictCreateArgs {
  select?: Prisma.SubdistrictSelect;

  @Field(() => SubdistrictCreateInput, { nullable: false })
  @Type(() => SubdistrictCreateInput)
  data!: SubdistrictCreateInput;
}
