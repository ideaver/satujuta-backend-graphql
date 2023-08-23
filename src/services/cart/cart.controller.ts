import { CartService } from './cart.service';
import { Cart } from 'src/@generated';
import { CartCreateArgs } from './dto/cart-create-one.args';
import { CartFindManyArgs } from './dto/cart-find-many.args';
import { CartFindUniqueArgs } from './dto/cart-find-one.args';
import { CartUpdateOneArgs } from './dto/cart-update-one.args';

import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // async createOne(cartCreateArgs: CartCreateArgs): Promise<Cart | void> {
  //   let cartCreateArgsPrisma: Prisma.CartCreateArgs = { ...cartCreateArgs };

  //   //Create cart account
  //   await this.createAccount(cartCreateArgsPrisma);

  //   return await this.cartService.createOne(cartCreateArgs);
  // }

  findMany(cartFindManyArgs: CartFindManyArgs) {
    return this.cartService.findMany(cartFindManyArgs);
  }

  findOne(cartFindUniqueArgs: CartFindUniqueArgs): Promise<Cart | void> {
    return this.cartService.findOne(cartFindUniqueArgs);
  }

  // async updateOne(cartUpdateOneArgs: CartUpdateOneArgs) {
  //   const { name, accountNumber, logoUrl } = cartUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     cartUpdateOneArgs.data.name = undefined;
  //   }

  //   if (accountNumber?.set === null) {
  //     cartUpdateOneArgs.data.accountNumber = undefined;
  //   }

  //   if (logoUrl?.set === null) {
  //     cartUpdateOneArgs.data.logoUrl = undefined;
  //   }

  //   return this.cartService.update(cartUpdateOneArgs);
  // }

  // remove(cartId: number) {
  //   return this.cartService.remove(cartId);
  // }
}
