import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ItemWhereUniqueInput } from 'src/@generated';

@InputType()
export class ItemFindUniqueArgs {
  select?: Prisma.ItemSelect;

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
