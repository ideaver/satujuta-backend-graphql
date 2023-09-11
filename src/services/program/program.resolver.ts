// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProgram,
  CreateManyProgramArgs,
  CreateOneProgramArgs,
  DeleteManyProgramArgs,
  DeleteOneProgramArgs,
  FindFirstProgramArgs,
  FindManyProgramArgs,
  FindUniqueProgramArgs,
  Program,
  ProgramAggregateArgs,
  UpdateManyProgramArgs,
  UpdateOneProgramArgs,
} from 'src/@generated';
import { ProgramController } from './program.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProgramSelect {
  select: Prisma.ProgramSelect;
}

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programController: ProgramController) {}

  @Mutation(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCreateOne(
    @Args()
    programCreateArgs: CreateOneProgramArgs,
    @Relations() relations: ProgramSelect,
  ): Promise<Program | void> {
    return await this.programController.createOne({
      ...programCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCreateMany(
    @Args()
    createManyProgramArgs: CreateManyProgramArgs,
  ) {
    return await this.programController.createMany(createManyProgramArgs);
  }

  @Query(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programFindOne(
    @Args()
    programFindUniqueArgs: FindUniqueProgramArgs,
    @Relations() relations: ProgramSelect,
  ): Promise<Program | void> {
    return this.programController.findOne({
      ...programFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Program], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programFindMany(
    @Args() programFindManyArgs: FindManyProgramArgs,
    @Relations() relations: ProgramSelect,
  ) {
    return this.programController.findMany({
      ...programFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programFindFirst(
    @Args()
    findFirstProgramArgs: FindFirstProgramArgs,
    @Relations() relations: ProgramSelect,
  ): Promise<Program | void> {
    return this.programController.findFirst({
      ...findFirstProgramArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programUpdateOne(
    @Args() programUpdateOneArgs: UpdateOneProgramArgs,
    @Relations() relations: ProgramSelect,
  ) {
    return this.programController.updateOne({
      ...replaceNullWithUndefined(programUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programUpdateMany(
    @Args() updateManyProgramArgs: UpdateManyProgramArgs,
  ) {
    return this.programController.updateMany(updateManyProgramArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async programDelete(
    @Args() deleteOneProgramArgs: DeleteOneProgramArgs,
    @Relations() relations: ProgramSelect,
  ) {
    return this.programController.delete({
      ...deleteOneProgramArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async programDeleteMany(
    @Args() deleteManyProgramArgs: DeleteManyProgramArgs,
  ) {
    return this.programController.deleteMany(deleteManyProgramArgs);
  }

  @Query(() => AggregateProgram, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programAggregate(@Args() programAggregateArgs: ProgramAggregateArgs) {
    return this.programController.aggregate(programAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCount(@Args() programCountAggregateInput: FindManyProgramArgs) {
    return this.programController.count(programCountAggregateInput);
  }
}
