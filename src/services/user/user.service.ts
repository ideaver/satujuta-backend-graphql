import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      return await this.prisma.user.create(userCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    try {
      return await this.prisma.user.createMany(userCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    try {
      return await this.prisma.user.findUnique(userFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    try {
      return await this.prisma.user.findMany(userFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    try {
      return await this.prisma.user.findFirst(userFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    try {
      return await this.prisma.user.update(userUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    try {
      return await this.prisma.user.updateMany(userUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    try {
      await this.prisma.user.delete(userDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    try {
      await this.prisma.user.deleteMany(userDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    try {
      return await this.prisma.user.aggregate(userAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    try {
      return await this.prisma.user.count(userCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
