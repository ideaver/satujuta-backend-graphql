import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Project } from 'src/@generated';
import { ProjectCreateArgs } from './dto/project-create-one.args';
import { ProjectFindManyArgs } from './dto/project-find-many.args';
import { ProjectFindUniqueArgs } from './dto/project-find-one.args';
import { ProjectUpdateOneArgs } from './dto/project-update-one.args';

interface ProjectSelect {
  select: Prisma.ProjectSelect;
}

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async projectCreateOne(
    @Args('projectCreateArgs') projectCreateArgs: ProjectCreateArgs,
    @Relations() relations: ProjectSelect
  ): Promise<Project | void> {
    projectCreateArgs.select = relations.select;
    return await this.projectService.createOne(projectCreateArgs);
  }

  @Query(() => [Project], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectFindMany(
    @Args('projectFindManyArgs') projectFindManyArgs: ProjectFindManyArgs,
    @Relations() relations: ProjectSelect,
  ) {
    //Auto implement prisma select from graphql query info
    projectFindManyArgs.select = relations.select;
    return this.projectService.findMany(projectFindManyArgs);
  }

  @Query(() => Project, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  projectFindOne(
    @Args('projectFindUniqueArgs')
    projectFindUniqueArgs: ProjectFindUniqueArgs,
    @Relations() relations: ProjectSelect,
  ) {
    //Auto implement prisma select from graphql query info
    projectFindUniqueArgs.select = relations.select;
    return this.projectService.findOne(projectFindUniqueArgs);
  }

  @Mutation(() => Project, { description: 'Deskripsinya ada disini loh' })
  projectUpdateOne(
    @Args('projectUpdateOneArgs') projectUpdateOneArgs: ProjectUpdateOneArgs,
    @Relations() relations: ProjectSelect,
  ) {
    projectUpdateOneArgs.select = relations.select;
    return this.projectService.update(projectUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  projectRemove(@Args('projectId') projectId: number) {
    return this.projectService.remove(projectId);
  }
}
