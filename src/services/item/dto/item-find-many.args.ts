import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  ItemWhereInput,
  ItemOrderByWithRelationInput,
  ItemWhereUniqueInput,
  ItemScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class ItemFindManyArgs {
  // @Field(() => ItemSelect, { nullable: true })
  select?: Prisma.ItemSelect;

  @Field(() => ItemWhereInput, {nullable:true})
  @Type(() => ItemWhereInput)
  where?: InstanceType<typeof ItemWhereInput>;
  @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<ItemOrderByWithRelationInput>;
  // @Field(() => ItemWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [ItemScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
