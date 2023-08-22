import { ProvinceService } from './province.service';
import { Province } from 'src/@generated';
import { ProvinceCreateArgs } from './dto/province-create-one.args';
import { ProvinceFindManyArgs } from './dto/province-find-many.args';
import { ProvinceFindUniqueArgs } from './dto/province-find-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  async createOne(
    provinceCreateArgs: ProvinceCreateArgs,
  ): Promise<Province | void> {
    return await this.provinceService.createOne(provinceCreateArgs);
  }

  findMany(provinceFindManyArgs: ProvinceFindManyArgs) {
    //handle graphql null value
    if (provinceFindManyArgs.where?.OR?.[0]?.id?.equals === null) {
      provinceFindManyArgs.where.OR[0].id = undefined;
    }

    //handle graphql null value
    if (provinceFindManyArgs.where?.OR?.[1]?.name?.contains === null) {
      provinceFindManyArgs.where.OR[1].name = undefined;
    }

    return this.provinceService.findMany(provinceFindManyArgs);
  }

  findOne(
    provinceFindUniqueArgs: ProvinceFindUniqueArgs,
  ): Promise<Province | void> {
    return this.provinceService.findOne(provinceFindUniqueArgs);
  }

  // async updateOne(provinceUpdateOneArgs: ProvinceUpdateOneArgs) {
  //   const { name, description, images } = provinceUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     provinceUpdateOneArgs.data.name = undefined;
  //   }

  //   if (description?.set === null) {
  //     provinceUpdateOneArgs.data.description = undefined;
  //   }

  //   if (images.delete?.[0]?.url.equals === null) {
  //     provinceUpdateOneArgs.data.images.delete = undefined;
  //   }

  //   if (images.deleteMany?.[0]?.url.equals === null) {
  //     provinceUpdateOneArgs.data.images.deleteMany = undefined;
  //   }

  //   if (images.createMany?.data?.[0]?.url === null) {
  //     provinceUpdateOneArgs.data.images.createMany = undefined;
  //   }
  //   //check for new claim and check if user has enough point
  //   await this.isNewProvinceClaimEventAndIsUserPointEnough(provinceUpdateOneArgs);
  //   return this.provinceService.update(provinceUpdateOneArgs);
  // }

  remove(provinceId: number) {
    return this.provinceService.remove(provinceId);
  }
}
