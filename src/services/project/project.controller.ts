import { ProjectService } from './project.service';
import { CreateOneProjectArgs, Project } from 'src/@generated';
import { ProjectFindManyArgs } from './dto/project-find-many.args';
import { ProjectFindUniqueArgs } from './dto/project-find-one.args';
import { ProjectUpdateOneArgs } from './dto/project-update-one.args';

import { Injectable, Logger } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { UserService } from '../user/user.service';

@Injectable()
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly userService: UserService,
  ) {}

  private readonly logger = new Logger(ProjectController.name);

  async createOne(
    projectCreateArgs: CreateOneProjectArgs,
  ): Promise<Project | void> {
    let projectCreateArgsPrisma: Prisma.ProjectCreateArgs = {
      ...projectCreateArgs,
    };

    //create account
    const getUser = //find the superuser
      await this.userService.findFirst({
        where: { userRole: { equals: UserRole.SUPERUSER } },
      });

    //assign the account owner to the superuser

    projectCreateArgsPrisma.data.account = {
      create: {
        name: projectCreateArgsPrisma.data.name + ' Account',
        accountCategory: AccountCategory.PROJECT,
        user: {
          connect: {
            userRole: UserRole.SUPERUSER,
            id: getUser ? getUser.id : undefined,
          },
        },
      },
    };

    return await this.projectService.createOne(projectCreateArgs);
  }

  findMany(projectFindManyArgs: ProjectFindManyArgs) {
    return this.projectService.findMany(projectFindManyArgs);
  }

  findOne(
    projectFindUniqueArgs: ProjectFindUniqueArgs,
  ): Promise<Project | void> {
    return this.projectService.findOne(projectFindUniqueArgs);
  }

  async updateOne(projectUpdateOneArgs: ProjectUpdateOneArgs) {
    const {
      name,
      description,
      images,
      startDate,
      endDate,
      returnRate,
      minimumInvestment,
    } = projectUpdateOneArgs.data;

    if (name?.set === null) {
      projectUpdateOneArgs.data.name = undefined;
    }

    if (description?.set === null) {
      projectUpdateOneArgs.data.description = undefined;
    }

    if (images.delete?.[0]?.url.equals === null) {
      projectUpdateOneArgs.data.images.delete = undefined;
    }

    if (images.deleteMany?.[0]?.url.equals === null) {
      projectUpdateOneArgs.data.images.deleteMany = undefined;
    }

    if (images.createMany?.data?.[0]?.url === null) {
      projectUpdateOneArgs.data.images.createMany = undefined;
    }

    if (startDate?.set === null) {
      projectUpdateOneArgs.data.startDate = undefined;
    }

    if (endDate?.set === null) {
      projectUpdateOneArgs.data.endDate = undefined;
    }

    if (returnRate?.set === null) {
      projectUpdateOneArgs.data.returnRate = undefined;
    }

    if (minimumInvestment?.set === null) {
      projectUpdateOneArgs.data.minimumInvestment = undefined;
    }

    return this.projectService.update(projectUpdateOneArgs);
  }

  remove(projectId: number) {
    return this.projectService.remove(projectId);
  }
}
