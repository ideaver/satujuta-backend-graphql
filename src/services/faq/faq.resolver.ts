// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateFaq,
  CreateManyFaqArgs,
  CreateOneFaqArgs,
  DeleteManyFaqArgs,
  DeleteOneFaqArgs,
  FindFirstFaqArgs,
  FindManyFaqArgs,
  FindUniqueFaqArgs,
  Faq,
  FaqAggregateArgs,
  UpdateManyFaqArgs,
  UpdateOneFaqArgs,
} from 'src/@generated';
import { FaqController } from './faq.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface FaqSelect {
  select: Prisma.FaqSelect;
}

@Resolver(() => Faq)
export class FaqResolver {
  constructor(private readonly faqController: FaqController) {}

  @Mutation(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async faqCreateOne(
    @Args()
    faqCreateArgs: CreateOneFaqArgs,
    @Relations() relations: FaqSelect,
  ): Promise<Faq | void> {
    return await this.faqController.createOne({
      ...faqCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async faqCreateMany(
    @Args()
    createManyFaqArgs: CreateManyFaqArgs,
  ) {
    return await this.faqController.createMany(createManyFaqArgs);
  }

  @Query(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqFindOne(
    @Args()
    faqFindUniqueArgs: FindUniqueFaqArgs,
    @Relations() relations: FaqSelect,
  ): Promise<Faq | void> {
    return this.faqController.findOne({
      ...faqFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Faq], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqFindMany(
    @Args() faqFindManyArgs: FindManyFaqArgs,
    @Relations() relations: FaqSelect,
  ) {
    return this.faqController.findMany({
      ...faqFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqFindFirst(
    @Args()
    findFirstFaqArgs: FindFirstFaqArgs,
    @Relations() relations: FaqSelect,
  ): Promise<Faq | void> {
    return this.faqController.findFirst({
      ...findFirstFaqArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async faqUpdateOne(
    @Args() faqUpdateOneArgs: UpdateOneFaqArgs,
    @Relations() relations: FaqSelect,
  ) {
    return this.faqController.updateOne({
      ...replaceNullWithUndefined(faqUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async faqUpdateMany(@Args() updateManyFaqArgs: UpdateManyFaqArgs) {
    return this.faqController.updateMany(updateManyFaqArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async faqDelete(
    @Args() deleteOneFaqArgs: DeleteOneFaqArgs,
    @Relations() relations: FaqSelect,
  ) {
    return this.faqController.delete({
      ...deleteOneFaqArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async faqDeleteMany(@Args() deleteManyFaqArgs: DeleteManyFaqArgs) {
    return this.faqController.deleteMany(deleteManyFaqArgs);
  }

  @Query(() => AggregateFaq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqAggregate(@Args() faqAggregateArgs: FaqAggregateArgs) {
    return this.faqController.aggregate(faqAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqCount(@Args() faqCountAggregateInput: FindManyFaqArgs) {
    return this.faqController.count(faqCountAggregateInput);
  }
}
