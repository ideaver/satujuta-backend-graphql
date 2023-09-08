// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateItem,
  CreateManyItemArgs,
  CreateOneItemArgs,
  DeleteManyItemArgs,
  DeleteOneItemArgs,
  FindFirstItemArgs,
  FindManyItemArgs,
  FindUniqueItemArgs,
  Item,
  ItemAggregateArgs,
  UpdateManyItemArgs,
  UpdateOneItemArgs,
} from 'src/@generated';
import { ItemController } from './item.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ItemSelect {
  select: Prisma.ItemSelect;
}

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemController: ItemController) {}

  @Mutation(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async itemCreateOne(
    @Args()
    itemCreateArgs: CreateOneItemArgs,
    @Relations() relations: ItemSelect,
  ): Promise<Item | void> {
    return await this.itemController.createOne({
      ...itemCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async itemCreateMany(
    @Args()
    createManyItemArgs: CreateManyItemArgs,
  ) {
    return await this.itemController.createMany(createManyItemArgs);
  }

  @Query(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemFindOne(
    @Args()
    itemFindUniqueArgs: FindUniqueItemArgs,
    @Relations() relations: ItemSelect,
  ): Promise<Item | void> {
    return this.itemController.findOne({
      ...itemFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Item], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemFindMany(
    @Args() itemFindManyArgs: FindManyItemArgs,
    @Relations() relations: ItemSelect,
  ) {
    return this.itemController.findMany({
      ...itemFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemFindFirst(
    @Args()
    findFirstItemArgs: FindFirstItemArgs,
    @Relations() relations: ItemSelect,
  ): Promise<Item | void> {
    return this.itemController.findFirst({
      ...findFirstItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async itemUpdateOne(
    @Args() itemUpdateOneArgs: UpdateOneItemArgs,
    @Relations() relations: ItemSelect,
  ) {
    return this.itemController.updateOne({
      ...replaceNullWithUndefined(itemUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async itemUpdateMany(@Args() updateManyItemArgs: UpdateManyItemArgs) {
    return this.itemController.updateMany(updateManyItemArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async itemDelete(
    @Args() deleteOneItemArgs: DeleteOneItemArgs,
    @Relations() relations: ItemSelect,
  ) {
    return this.itemController.delete({
      ...deleteOneItemArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async itemDeleteMany(@Args() deleteManyItemArgs: DeleteManyItemArgs) {
    return this.itemController.deleteMany(deleteManyItemArgs);
  }

  @Query(() => AggregateItem, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemAggregate(@Args() itemAggregateArgs: ItemAggregateArgs) {
    return this.itemController.aggregate(itemAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  count(@Args() itemCountAggregateInput: FindManyItemArgs) {
    return this.itemController.count(itemCountAggregateInput);
  }
}
