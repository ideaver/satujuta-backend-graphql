import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CheckInService } from './check-in.service';

@Injectable()
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  async createOne(checkInCreateArgs: Prisma.CheckInCreateArgs) {
    return await this.checkInService.createOne(checkInCreateArgs);
  }

  async createMany(checkInCreateManyArgs: Prisma.CheckInCreateManyArgs) {
    return await this.checkInService.createMany(checkInCreateManyArgs);
  }

  async findOne(checkInFindUniqueArgs: Prisma.CheckInFindUniqueArgs) {
    return await this.checkInService.findOne(checkInFindUniqueArgs);
  }

  async findMany(checkInFindManyArgs: Prisma.CheckInFindManyArgs) {
    return await this.checkInService.findMany(checkInFindManyArgs);
  }

  async findFirst(checkInFindFirstArgs: Prisma.CheckInFindFirstArgs) {
    return await this.checkInService.findFirst(checkInFindFirstArgs);
  }

  async updateOne(checkInUpdateOneArgs: Prisma.CheckInUpdateArgs) {
    return await this.checkInService.updateOne(checkInUpdateOneArgs);
  }

  async updateMany(checkInUpdateManyArgs: Prisma.CheckInUpdateManyArgs) {
    return await this.checkInService.updateMany(checkInUpdateManyArgs);
  }

  async delete(checkInDeleteArgs: Prisma.CheckInDeleteArgs) {
    return await this.checkInService.delete(checkInDeleteArgs);
  }

  async deleteMany(checkInDeleteManyArgs: Prisma.CheckInDeleteManyArgs) {
    return await this.checkInService.deleteMany(checkInDeleteManyArgs);
  }

  async aggregate(checkInAggregateArgs: Prisma.CheckInAggregateArgs) {
    return await this.checkInService.aggregate(checkInAggregateArgs);
  }

  async count(checkInCountArgs: Prisma.CheckInCountArgs) {
    return await this.checkInService.count(checkInCountArgs);
  }
}
