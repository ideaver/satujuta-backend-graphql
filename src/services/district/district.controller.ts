import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DistrictService } from './district.service';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

@Injectable()
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  async createOne(districtCreateArgs: Prisma.DistrictCreateArgs) {
    return await this.districtService.createOne(districtCreateArgs);
  }

  async createMany(districtCreateManyArgs: Prisma.DistrictCreateManyArgs) {
    return await this.districtService.createMany(districtCreateManyArgs);
  }

  async findOne(districtFindUniqueArgs: Prisma.DistrictFindUniqueArgs) {
    return await this.districtService.findOne(districtFindUniqueArgs);
  }

  async findMany(districtFindManyArgs: Prisma.DistrictFindManyArgs) {
    return await this.districtService.findMany(
      replaceNullWithUndefined(districtFindManyArgs),
    );
  }

  async findFirst(districtFindFirstArgs: Prisma.DistrictFindFirstArgs) {
    return await this.districtService.findFirst(districtFindFirstArgs);
  }

  async updateOne(districtUpdateOneArgs: Prisma.DistrictUpdateArgs) {
    return await this.districtService.updateOne(districtUpdateOneArgs);
  }

  async updateMany(districtUpdateManyArgs: Prisma.DistrictUpdateManyArgs) {
    return await this.districtService.updateMany(districtUpdateManyArgs);
  }

  async aggregate(districtAggregateArgs: Prisma.DistrictAggregateArgs) {
    return await this.districtService.aggregate(districtAggregateArgs);
  }

  async count(districtCountArgs: Prisma.DistrictCountArgs) {
    return await this.districtService.count(districtCountArgs);
  }
}
