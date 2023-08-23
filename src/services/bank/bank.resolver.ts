import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Bank } from 'src/@generated';
import { BankCreateArgs } from './dto/bank-create-one.args';
import { BankFindManyArgs } from './dto/bank-find-many.args';
import { BankFindUniqueArgs } from './dto/bank-find-one.args';
import { BankUpdateOneArgs } from './dto/bank-update-one.args';
import { BankController } from './bank.controller';
import { Logger } from '@nestjs/common';

interface BankSelect {
  select: Prisma.BankSelect;
}

@Resolver(() => Bank)
export class BankResolver {
  constructor(private readonly bankController: BankController) {}
  private readonly logger = new Logger(BankResolver.name);
  @Mutation(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankCreateOne(
    @Args('bankCreateArgs') bankCreateArgs: BankCreateArgs,
    @Relations() relations: BankSelect,
  ): Promise<Bank | void> {
    bankCreateArgs.select = relations.select;
    return await this.bankController.createOne(bankCreateArgs);
  }

  @Query(() => [Bank], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankFindMany(
    @Args('bankFindManyArgs', { nullable: true })
    bankFindManyArgs: BankFindManyArgs,
    @Relations() relations: BankSelect,
  ) {
    //Auto implement prisma select from graphql query info
    if (bankFindManyArgs) {
      bankFindManyArgs.select = relations.select;
    }

    return this.bankController.findMany(bankFindManyArgs);
  }

  @Query(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankFindOne(
    @Args('bankFindUniqueArgs')
    bankFindUniqueArgs: BankFindUniqueArgs,
    @Relations() relations: BankSelect,
  ): Promise<Bank | void> {
    //Auto implement prisma select from graphql query info
    bankFindUniqueArgs.select = relations.select;
    return this.bankController.findOne(bankFindUniqueArgs);
  }

  @Mutation(() => Bank, {
    description:
      'Deskripsinya ada disini loh, Jika tentang mutasi klaim bank, backend akan cek apakah saldo point user cukup untuk claim',
  })
  async bankUpdateOne(
    @Args('bankUpdateOneArgs') bankUpdateOneArgs: BankUpdateOneArgs,
    @Relations() relations: BankSelect,
  ) {
    //Auto implement prisma select from graphql query info
    bankUpdateOneArgs.select = relations.select;

    return this.bankController.updateOne(bankUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  bankRemove(@Args('bankId') bankId: number) {
    return this.bankController.remove(bankId);
  }
}
