// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateBank,
  CreateManyBankArgs,
  CreateOneBankArgs,
  DeleteManyBankArgs,
  DeleteOneBankArgs,
  FindFirstBankArgs,
  FindManyBankArgs,
  FindUniqueBankArgs,
  Bank,
  BankAggregateArgs,
  UpdateManyBankArgs,
  UpdateOneBankArgs,
} from 'src/@generated';
import { BankController } from './bank.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface BankSelect {
  select: Prisma.BankSelect;
}

@Resolver(() => Bank)
export class BankResolver {
  constructor(private readonly bankController: BankController) {}

  @Mutation(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankCreateOne(
    @Args()
    bankCreateArgs: CreateOneBankArgs,
    @Relations() relations: BankSelect,
  ): Promise<Bank | void> {
    return await this.bankController.createOne({
      ...bankCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankCreateMany(
    @Args()
    createManyBankArgs: CreateManyBankArgs,
  ) {
    return await this.bankController.createMany(createManyBankArgs);
  }

  @Query(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankFindOne(
    @Args()
    bankFindUniqueArgs: FindUniqueBankArgs,
    @Relations() relations: BankSelect,
  ): Promise<Bank | void> {
    return this.bankController.findOne({
      ...bankFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Bank], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankFindMany(
    @Args() bankFindManyArgs: FindManyBankArgs,
    @Relations() relations: BankSelect,
  ) {
    return this.bankController.findMany({
      ...bankFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankFindFirst(
    @Args()
    findFirstBankArgs: FindFirstBankArgs,
    @Relations() relations: BankSelect,
  ): Promise<Bank | void> {
    return this.bankController.findFirst({
      ...findFirstBankArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankUpdateOne(
    @Args() bankUpdateOneArgs: UpdateOneBankArgs,
    @Relations() relations: BankSelect,
  ) {
    return this.bankController.updateOne({
      ...replaceNullWithUndefined(bankUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Bank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankUpdateMany(@Args() updateManyBankArgs: UpdateManyBankArgs) {
    return this.bankController.updateMany(updateManyBankArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async bankDelete(
    @Args() deleteOneBankArgs: DeleteOneBankArgs,
    @Relations() relations: BankSelect,
  ) {
    return this.bankController.delete({
      ...deleteOneBankArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async bankDeleteMany(@Args() deleteManyBankArgs: DeleteManyBankArgs) {
    return this.bankController.deleteMany(deleteManyBankArgs);
  }

  @Query(() => AggregateBank, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAggregate(@Args() bankAggregateArgs: BankAggregateArgs) {
    return this.bankController.aggregate(bankAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankCount(@Args() bankCountAggregateInput: FindManyBankArgs) {
    return this.bankController.count(bankCountAggregateInput);
  }
}
