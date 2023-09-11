import { Injectable } from '@nestjs/common';
import { AccountCategory, Prisma, UserRole } from '@prisma/client';
import { ProjectService } from './project.service';
import { UserController } from '../user/user.controller';

@Injectable()
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly userController: UserController,
  ) {}

  async createOne(projectCreateArgs: Prisma.ProjectCreateArgs) {
    //create account
    const getUser = //find the superuser
      await this.userController.findFirst({
        take: 1,
        where: { userRole: { equals: UserRole.SUPERUSER } },
      });

    //assign the account owner to the superuser
    projectCreateArgs.data.account = {
      create: {
        name: projectCreateArgs.data.name + ' Account',
        accountCategory: AccountCategory.PROJECT,
        user: {
          connect: {
            userRole: UserRole.SUPERUSER,
            id: getUser ? getUser.id : undefined,
          },
        },
      },
    };

    //create project
    return await this.projectService.createOne(projectCreateArgs);
  }

  async createMany(projectCreateManyArgs: Prisma.ProjectCreateManyArgs) {
    return await this.projectService.createMany(projectCreateManyArgs);
  }

  async findOne(projectFindUniqueArgs: Prisma.ProjectFindUniqueArgs) {
    return await this.projectService.findOne(projectFindUniqueArgs);
  }

  async findMany(projectFindManyArgs: Prisma.ProjectFindManyArgs) {
    return await this.projectService.findMany(projectFindManyArgs);
  }

  async findFirst(projectFindFirstArgs: Prisma.ProjectFindFirstArgs) {
    return await this.projectService.findFirst(projectFindFirstArgs);
  }

  async updateOne(projectUpdateOneArgs: Prisma.ProjectUpdateArgs) {
    return await this.projectService.updateOne(projectUpdateOneArgs);
  }

  async updateMany(projectUpdateManyArgs: Prisma.ProjectUpdateManyArgs) {
    return await this.projectService.updateMany(projectUpdateManyArgs);
  }

  async delete(projectDeleteArgs: Prisma.ProjectDeleteArgs) {
    return await this.projectService.delete(projectDeleteArgs);
  }

  async deleteMany(projectDeleteManyArgs: Prisma.ProjectDeleteManyArgs) {
    return await this.projectService.deleteMany(projectDeleteManyArgs);
  }

  async aggregate(projectAggregateArgs: Prisma.ProjectAggregateArgs) {
    return await this.projectService.aggregate(projectAggregateArgs);
  }

  async count(projectCountArgs: Prisma.ProjectCountArgs) {
    return await this.projectService.count(projectCountArgs);
  }
}
