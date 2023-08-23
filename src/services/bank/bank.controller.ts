import { BankService } from './bank.service';
import { Bank } from 'src/@generated';
import { BankCreateArgs } from './dto/bank-create-one.args';
import { BankFindManyArgs } from './dto/bank-find-many.args';
import { BankFindUniqueArgs } from './dto/bank-find-one.args';
import { BankUpdateOneArgs } from './dto/bank-update-one.args';

import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class BankController {
  constructor(
    private readonly bankService: BankService,
    private readonly userService: UserService,
  ) {}

  async createOne(bankCreateArgs: BankCreateArgs): Promise<Bank | void> {
    let bankCreateArgsPrisma: Prisma.BankCreateArgs = { ...bankCreateArgs };

    //Create bank account
    await this.createAccount(bankCreateArgsPrisma);

    return await this.bankService.createOne(bankCreateArgs);
  }

  findMany(bankFindManyArgs: BankFindManyArgs) {
    return this.bankService.findMany(bankFindManyArgs);
  }

  findOne(bankFindUniqueArgs: BankFindUniqueArgs): Promise<Bank | void> {
    return this.bankService.findOne(bankFindUniqueArgs);
  }

  async updateOne(bankUpdateOneArgs: BankUpdateOneArgs) {
    const { name, accountNumber, logoUrl } = bankUpdateOneArgs.data;

    if (name?.set === null) {
      bankUpdateOneArgs.data.name = undefined;
    }

    if (accountNumber?.set === null) {
      bankUpdateOneArgs.data.accountNumber = undefined;
    }

    if (logoUrl?.set === null) {
      bankUpdateOneArgs.data.logoUrl = undefined;
    }

    return this.bankService.update(bankUpdateOneArgs);
  }

  remove(bankId: number) {
    return this.bankService.remove(bankId);
  }

  private async createAccount(bankCreateArgsPrisma) {
    const getUser = //find the superuser
      await this.userService.findFirst({
        where: { userRole: { equals: UserRole.SUPERUSER } },
      });

    bankCreateArgsPrisma.data.account = {
      create: {
        name: bankCreateArgsPrisma.data.name + ' Account',
        accountCategory: AccountCategory.BANK,
        user: { connect: { id: getUser ? getUser.id : undefined } },
      },
    };
  }
}
