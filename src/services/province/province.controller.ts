import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProvinceService } from './province.service';

@Injectable()
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  async createOne(provinceCreateArgs: Prisma.ProvinceCreateArgs) {
    return await this.provinceService.createOne(provinceCreateArgs);
  }

  async createMany(provinceCreateManyArgs: Prisma.ProvinceCreateManyArgs) {
    return await this.provinceService.createMany(provinceCreateManyArgs);
  }

  async findOne(provinceFindUniqueArgs: Prisma.ProvinceFindUniqueArgs) {
    return await this.provinceService.findOne(provinceFindUniqueArgs);
  }

  async findMany(provinceFindManyArgs: Prisma.ProvinceFindManyArgs) {
    return await this.provinceService.findMany(provinceFindManyArgs);
  }

  async findFirst(provinceFindFirstArgs: Prisma.ProvinceFindFirstArgs) {
    return await this.provinceService.findFirst(provinceFindFirstArgs);
  }

  async updateOne(provinceUpdateOneArgs: Prisma.ProvinceUpdateArgs) {
    return await this.provinceService.updateOne(provinceUpdateOneArgs);
  }

  async updateMany(provinceUpdateManyArgs: Prisma.ProvinceUpdateManyArgs) {
    return await this.provinceService.updateMany(provinceUpdateManyArgs);
  }

  async aggregate(provinceAggregateArgs: Prisma.ProvinceAggregateArgs) {
    return await this.provinceService.aggregate(provinceAggregateArgs);
  }

  async count(provinceCountArgs: Prisma.ProvinceCountArgs) {
    return await this.provinceService.count(provinceCountArgs);
  }
}
