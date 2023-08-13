import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneProjectArgs, Project } from 'src/@generated';
import { ProjectFindManyArgs } from './dto/project-find-many.args';
import { ProjectFindUniqueArgs } from './dto/project-find-one.args';
import { ProjectUpdateOneArgs } from './dto/project-update-one.args';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createOne(projectCreateArgs: CreateOneProjectArgs): Promise<Project | void> {

    return await this.prisma.project
      .create(projectCreateArgs)
      .then((project) => {
        return project;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(projectFindManyArgs: ProjectFindManyArgs) {
    return this.prisma.project
      .findMany(projectFindManyArgs)
      .then((projects) => {
        return projects;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(projectFindUniqueArgs: ProjectFindUniqueArgs): Promise<Project | void> {
    return await this.prisma.project
      .findUnique(projectFindUniqueArgs)
      .then((project) => {
        return project;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(projectUpdateOneArgs: ProjectUpdateOneArgs): Promise<Project | void> {
    return this.prisma.project
      .update(projectUpdateOneArgs)
      .then((project) => {
        return project;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(projectId: number): Promise<boolean | void>{
    return await this.prisma.project
      .delete({
        where: { id: projectId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
