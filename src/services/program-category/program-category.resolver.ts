// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProgramCategory,
  CreateManyProgramCategoryArgs,
  CreateOneProgramCategoryArgs,
  DeleteManyProgramCategoryArgs,
  DeleteOneProgramCategoryArgs,
  FindFirstProgramCategoryArgs,
  FindManyProgramCategoryArgs,
  FindUniqueProgramCategoryArgs,
  ProgramCategory,
  ProgramCategoryAggregateArgs,
  UpdateManyProgramCategoryArgs,
  UpdateOneProgramCategoryArgs,
} from 'src/@generated';
import { ProgramCategoryController } from './program-category.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProgramCategorySelect {
  select: Prisma.ProgramCategorySelect;
}

@Resolver(() => ProgramCategory)
export class ProgramCategoryResolver {
  constructor(
    private readonly programCategoryController: ProgramCategoryController,
  ) {}

  @Mutation(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryCreateOne(
    @Args()
    programCategoryCreateArgs: CreateOneProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ): Promise<ProgramCategory | void> {
    return await this.programCategoryController.createOne({
      ...programCategoryCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryCreateMany(
    @Args()
    createManyProgramCategoryArgs: CreateManyProgramCategoryArgs,
  ) {
    return await this.programCategoryController.createMany(
      createManyProgramCategoryArgs,
    );
  }

  @Query(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryFindOne(
    @Args()
    programCategoryFindUniqueArgs: FindUniqueProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ): Promise<ProgramCategory | void> {
    return this.programCategoryController.findOne({
      ...programCategoryFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ProgramCategory], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryFindMany(
    @Args() programCategoryFindManyArgs: FindManyProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    return this.programCategoryController.findMany({
      ...programCategoryFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryFindFirst(
    @Args()
    findFirstProgramCategoryArgs: FindFirstProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ): Promise<ProgramCategory | void> {
    return this.programCategoryController.findFirst({
      ...findFirstProgramCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryUpdateOne(
    @Args() programCategoryUpdateOneArgs: UpdateOneProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    return this.programCategoryController.updateOne({
      ...replaceNullWithUndefined(programCategoryUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryUpdateMany(
    @Args() updateManyProgramCategoryArgs: UpdateManyProgramCategoryArgs,
  ) {
    return this.programCategoryController.updateMany(
      updateManyProgramCategoryArgs,
    );
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryDelete(
    @Args() deleteOneProgramCategoryArgs: DeleteOneProgramCategoryArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    return this.programCategoryController.delete({
      ...deleteOneProgramCategoryArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryDeleteMany(
    @Args() deleteManyProgramCategoryArgs: DeleteManyProgramCategoryArgs,
  ) {
    return this.programCategoryController.deleteMany(
      deleteManyProgramCategoryArgs,
    );
  }

  @Query(() => AggregateProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryAggregate(
    @Args() programCategoryAggregateArgs: ProgramCategoryAggregateArgs,
  ) {
    return this.programCategoryController.aggregate(
      programCategoryAggregateArgs,
    );
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryCount(
    @Args() programCategoryCountAggregateInput: FindManyProgramCategoryArgs,
  ) {
    return this.programCategoryController.count(
      programCategoryCountAggregateInput,
    );
  }
}
