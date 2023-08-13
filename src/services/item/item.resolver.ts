import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Item } from 'src/@generated';
import { ItemCreateArgs } from './dto/item-create-one.args';
import { ItemFindManyArgs } from './dto/item-find-many.args';
import { ItemFindUniqueArgs } from './dto/item-find-one.args';
import { ItemUpdateOneArgs } from './dto/item-update-one.args';

interface ItemSelect {
  select: Prisma.ItemSelect;
}

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Mutation(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async itemCreateOne(
    @Args('itemCreateArgs') itemCreateArgs: ItemCreateArgs,
    @Relations() relations: ItemSelect
  ): Promise<Item | void> {
    itemCreateArgs.select = relations.select;
    return await this.itemService.createOne(itemCreateArgs);
  }

  @Query(() => [Item], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemFindMany(
    @Args('itemFindManyArgs') itemFindManyArgs: ItemFindManyArgs,
    @Relations() relations: ItemSelect,
  ) {
    //Auto implement prisma select from graphql query info
    itemFindManyArgs.select = relations.select;
    return this.itemService.findMany(itemFindManyArgs);
  }

  @Query(() => Item, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  itemFindOne(
    @Args('itemFindUniqueArgs')
    itemFindUniqueArgs: ItemFindUniqueArgs,
    @Relations() relations: ItemSelect,
  ) {
    //Auto implement prisma select from graphql query info
    itemFindUniqueArgs.select = relations.select;
    return this.itemService.findOne(itemFindUniqueArgs);
  }

  @Mutation(() => Item, { description: 'Deskripsinya ada disini loh' })
  itemUpdateOne(
    @Args('itemUpdateOneArgs') itemUpdateOneArgs: ItemUpdateOneArgs,
    @Relations() relations: ItemSelect,
  ) {
    itemUpdateOneArgs.select = relations.select;
    return this.itemService.update(itemUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  itemRemove(@Args('itemId') itemId: number) {
    return this.itemService.remove(itemId);
  }
}
