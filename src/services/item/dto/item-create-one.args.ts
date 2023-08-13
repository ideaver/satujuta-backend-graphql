import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ItemCreateInput } from 'src/@generated';
import { Prisma } from '@prisma/client';

@InputType()
export class ItemCreateArgs {
  select?: Prisma.ItemSelect;

  @Field(() => ItemCreateInput, { nullable: false })
  @Type(() => ItemCreateInput)
  data!: ItemCreateInput;
  //TODO: terapkan Case sensitive @Transform(({name}) => name.toUpperCase())
  //maybe use field middleware
}
