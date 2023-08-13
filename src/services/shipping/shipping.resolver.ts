import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { ShippingService } from './shipping.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Shipping } from 'src/@generated';
import { ShippingCreateArgs } from './dto/shipping-create-one.args';
import { ShippingFindManyArgs } from './dto/shipping-find-many.args';
import { ShippingFindUniqueArgs } from './dto/shipping-find-one.args';
import { ShippingUpdateOneArgs } from './dto/shipping-update-one.args';

interface ShippingSelect {
  select: Prisma.ShippingSelect;
}

@Resolver(() => Shipping)
export class ShippingResolver {
  constructor(private readonly shippingService: ShippingService) {}

  @Mutation(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async shippingCreateOne(
    @Args('shippingCreateArgs') shippingCreateArgs: ShippingCreateArgs,
    @Relations() relations: ShippingSelect
  ): Promise<Shipping | void> {
    shippingCreateArgs.select = relations.select;
    return await this.shippingService.createOne(shippingCreateArgs);
  }

  @Query(() => [Shipping], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingFindMany(
    @Args('shippingFindManyArgs') shippingFindManyArgs: ShippingFindManyArgs,
    @Relations() relations: ShippingSelect,
  ) {
    //Auto implement prisma select from graphql query info
    shippingFindManyArgs.select = relations.select;
    return this.shippingService.findMany(shippingFindManyArgs);
  }

  @Query(() => Shipping, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  shippingFindOne(
    @Args('shippingFindUniqueArgs')
    shippingFindUniqueArgs: ShippingFindUniqueArgs,
    @Relations() relations: ShippingSelect,
  ) {
    //Auto implement prisma select from graphql query info
    shippingFindUniqueArgs.select = relations.select;
    return this.shippingService.findOne(shippingFindUniqueArgs);
  }

  @Mutation(() => Shipping, { description: 'Deskripsinya ada disini loh' })
  shippingUpdateOne(
    @Args('shippingUpdateOneArgs') shippingUpdateOneArgs: ShippingUpdateOneArgs,
    @Relations() relations: ShippingSelect,
  ) {
    shippingUpdateOneArgs.select = relations.select;
    return this.shippingService.update(shippingUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  shippingRemove(@Args('shippingId') shippingId: number) {
    return this.shippingService.remove(shippingId);
  }
}
