import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneBankArgs, Bank } from 'src/@generated';
import { BankFindManyArgs } from './dto/bank-find-many.args';
import { BankFindUniqueArgs } from './dto/bank-find-one.args';
import { BankUpdateOneArgs } from './dto/bank-update-one.args';

@Injectable()
export class BankService {
  constructor(private prisma: PrismaService) {}

  async createOne(bankCreateArgs: CreateOneBankArgs): Promise<Bank | void> {
    return await this.prisma.bank
      .create(bankCreateArgs)
      .then((bank) => {
        return bank;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(bankFindManyArgs: BankFindManyArgs) {
    return this.prisma.bank
      .findMany(bankFindManyArgs)
      .then((banks) => {
        return banks;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(bankFindUniqueArgs: BankFindUniqueArgs): Promise<Bank | void> {
    return await this.prisma.bank
      .findUnique(bankFindUniqueArgs)
      .then((bank) => {
        return bank;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(bankUpdateOneArgs: BankUpdateOneArgs): Promise<Bank | void> {
    return this.prisma.bank
      .update(bankUpdateOneArgs)
      .then((bank) => {
        return bank;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(bankId: number): Promise<boolean | void> {
    return await this.prisma.bank
      .delete({
        where: { id: bankId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
