import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ItemUpdateInput, ItemWhereUniqueInput } from 'src/@generated';

@InputType()
export class ItemUpdateOneArgs {

    select?: Prisma.ItemSelect;

    @Field(() => ItemUpdateInput, {nullable:false})
    @Type(() => ItemUpdateInput)
    data!: InstanceType<typeof ItemUpdateInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}
