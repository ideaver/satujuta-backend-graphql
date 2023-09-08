import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    return await this.userService.createOne(userCreateArgs);
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    return await this.userService.delete(userDeleteArgs);
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    return await this.userService.deleteMany(userDeleteManyArgs);
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    return await this.userService.count(userCountArgs);
  }
}
