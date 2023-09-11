// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProject,
  CreateManyProjectArgs,
  CreateOneProjectArgs,
  DeleteManyProjectArgs,
  DeleteOneProjectArgs,
  FindFirstProjectArgs,
  FindManyProjectArgs,
  FindUniqueProjectArgs,
  Project,
  ProjectAggregateArgs,
  UpdateManyProjectArgs,
  UpdateOneProjectArgs,
} from 'src/@generated';
import { ProjectController } from './project.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProjectSelect {
  select: Prisma.ProjectSelect;
}

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectController: ProjectController) {}

  @Mutation(() => Project, {
    nullable: true,
    description: 'Otomatis dibuatkan account untuk project ini',
  })
  async projectCreateOne(
    @Args()
    projectCreateArgs: CreateOneProjectArgs,
    @Relations() relations: ProjectSelect,
  ): Promise<Project | void> {
    return await this.projectController.createOne({
      ...projectCreateArgs,
      select: relations.select,
    });
  }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async projectCreateMany(
  //   @Args()
  //   createManyProjectArgs: CreateManyProjectArgs,
  // ) {
  //   return await this.projectController.createMany(createManyProjectArgs);
  // }

  @Query(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectFindOne(
    @Args()
    projectFindUniqueArgs: FindUniqueProjectArgs,
    @Relations() relations: ProjectSelect,
  ): Promise<Project | void> {
    return this.projectController.findOne({
      ...projectFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Project], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectFindMany(
    @Args() projectFindManyArgs: FindManyProjectArgs,
    @Relations() relations: ProjectSelect,
  ) {
    return this.projectController.findMany({
      ...projectFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectFindFirst(
    @Args()
    findFirstProjectArgs: FindFirstProjectArgs,
    @Relations() relations: ProjectSelect,
  ): Promise<Project | void> {
    return this.projectController.findFirst({
      ...findFirstProjectArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async projectUpdateOne(
    @Args() projectUpdateOneArgs: UpdateOneProjectArgs,
    @Relations() relations: ProjectSelect,
  ) {
    return this.projectController.updateOne({
      ...replaceNullWithUndefined(projectUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async projectUpdateMany(
    @Args() updateManyProjectArgs: UpdateManyProjectArgs,
  ) {
    return this.projectController.updateMany(updateManyProjectArgs);
  }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async projectDelete(
  //   @Args() deleteOneProjectArgs: DeleteOneProjectArgs,
  //   @Relations() relations: ProjectSelect,
  // ) {
  //   return this.projectController.delete({
  //     ...deleteOneProjectArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async projectDeleteMany(
  //   @Args() deleteManyProjectArgs: DeleteManyProjectArgs,
  // ) {
  //   return this.projectController.deleteMany(deleteManyProjectArgs);
  // }

  @Query(() => AggregateProject, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectAggregate(@Args() projectAggregateArgs: ProjectAggregateArgs) {
    return this.projectController.aggregate(projectAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectCount(@Args() projectCountAggregateInput: FindManyProjectArgs) {
    return this.projectController.count(projectCountAggregateInput);
  }
}
