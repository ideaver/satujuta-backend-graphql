import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createOne(projectCreateArgs: Prisma.ProjectCreateArgs) {
    try {
      return await this.prisma.project.create(projectCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(projectCreateManyArgs: Prisma.ProjectCreateManyArgs) {
    try {
      return await this.prisma.project.createMany(projectCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(projectFindUniqueArgs: Prisma.ProjectFindUniqueArgs) {
    try {
      return await this.prisma.project.findUnique(projectFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(projectFindManyArgs: Prisma.ProjectFindManyArgs) {
    try {
      return await this.prisma.project.findMany(projectFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(projectFindFirstArgs: Prisma.ProjectFindFirstArgs) {
    try {
      return await this.prisma.project.findFirst(projectFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(projectUpdateOneArgs: Prisma.ProjectUpdateArgs) {
    try {
      return await this.prisma.project.update(projectUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(projectUpdateManyArgs: Prisma.ProjectUpdateManyArgs) {
    try {
      return await this.prisma.project.updateMany(projectUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(projectDeleteArgs: Prisma.ProjectDeleteArgs) {
    try {
      await this.prisma.project.delete(projectDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(projectDeleteManyArgs: Prisma.ProjectDeleteManyArgs) {
    try {
      await this.prisma.project.deleteMany(projectDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(projectAggregateArgs: Prisma.ProjectAggregateArgs) {
    try {
      return await this.prisma.project.aggregate(projectAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(projectCountArgs: Prisma.ProjectCountArgs) {
    try {
      return await this.prisma.project.count(projectCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
