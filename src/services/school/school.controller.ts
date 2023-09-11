import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SchoolService } from './school.service';

@Injectable()
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  async createOne(schoolCreateArgs: Prisma.SchoolCreateArgs) {
    return await this.schoolService.createOne(schoolCreateArgs);
  }

  async createMany(schoolCreateManyArgs: Prisma.SchoolCreateManyArgs) {
    return await this.schoolService.createMany(schoolCreateManyArgs);
  }

  async findOne(schoolFindUniqueArgs: Prisma.SchoolFindUniqueArgs) {
    return await this.schoolService.findOne(schoolFindUniqueArgs);
  }

  async findMany(schoolFindManyArgs: Prisma.SchoolFindManyArgs) {
    return await this.schoolService.findMany(schoolFindManyArgs);
  }

  async findFirst(schoolFindFirstArgs: Prisma.SchoolFindFirstArgs) {
    return await this.schoolService.findFirst(schoolFindFirstArgs);
  }

  async updateOne(schoolUpdateOneArgs: Prisma.SchoolUpdateArgs) {
    return await this.schoolService.updateOne(schoolUpdateOneArgs);
  }

  async updateMany(schoolUpdateManyArgs: Prisma.SchoolUpdateManyArgs) {
    return await this.schoolService.updateMany(schoolUpdateManyArgs);
  }

  async delete(schoolDeleteArgs: Prisma.SchoolDeleteArgs) {
    return await this.schoolService.delete(schoolDeleteArgs);
  }

  async deleteMany(schoolDeleteManyArgs: Prisma.SchoolDeleteManyArgs) {
    return await this.schoolService.deleteMany(schoolDeleteManyArgs);
  }

  async aggregate(schoolAggregateArgs: Prisma.SchoolAggregateArgs) {
    return await this.schoolService.aggregate(schoolAggregateArgs);
  }

  async count(schoolCountArgs: Prisma.SchoolCountArgs) {
    return await this.schoolService.count(schoolCountArgs);
  }
}
