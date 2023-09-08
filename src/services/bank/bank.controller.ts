import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { BankService } from './bank.service';
import { UserController } from '../user/user.controller';

@Injectable()
export class BankController {
  constructor(
    private readonly bankService: BankService,
    private readonly userController: UserController,
  ) {}

  async createOne(bankCreateArgs: Prisma.BankCreateArgs) {
    //Create bank account
    await this.createAccount(bankCreateArgs);
    return await this.bankService.createOne(bankCreateArgs);
  }

  async createMany(bankCreateManyArgs: Prisma.BankCreateManyArgs) {
    return await this.bankService.createMany(bankCreateManyArgs);
  }

  async findOne(bankFindUniqueArgs: Prisma.BankFindUniqueArgs) {
    return await this.bankService.findOne(bankFindUniqueArgs);
  }

  async findMany(bankFindManyArgs: Prisma.BankFindManyArgs) {
    return await this.bankService.findMany(bankFindManyArgs);
  }

  async findFirst(bankFindFirstArgs: Prisma.BankFindFirstArgs) {
    return await this.bankService.findFirst(bankFindFirstArgs);
  }

  async updateOne(bankUpdateOneArgs: Prisma.BankUpdateArgs) {
    return await this.bankService.updateOne(bankUpdateOneArgs);
  }

  async updateMany(bankUpdateManyArgs: Prisma.BankUpdateManyArgs) {
    return await this.bankService.updateMany(bankUpdateManyArgs);
  }

  async delete(bankDeleteArgs: Prisma.BankDeleteArgs) {
    return await this.bankService.delete(bankDeleteArgs);
  }

  async deleteMany(bankDeleteManyArgs: Prisma.BankDeleteManyArgs) {
    return await this.bankService.deleteMany(bankDeleteManyArgs);
  }

  async aggregate(bankAggregateArgs: Prisma.BankAggregateArgs) {
    return await this.bankService.aggregate(bankAggregateArgs);
  }

  async count(bankCountArgs: Prisma.BankCountArgs) {
    return await this.bankService.count(bankCountArgs);
  }

  private async createAccount(bankCreateArgs) {
    const getUser = //find the superuser
      await this.userController.findFirst({
        where: { userRole: { equals: UserRole.SUPERUSER } },
      });

    bankCreateArgs.data.account = {
      create: {
        name: bankCreateArgs.data.name + ' Account',
        accountCategory: AccountCategory.BANK,
        user: { connect: { id: getUser ? getUser.id : undefined } },
      },
    };
  }
}
