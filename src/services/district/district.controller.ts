import { DistrictService } from './district.service';
import { District } from 'src/@generated';
import { DistrictCreateArgs } from './dto/district-create-one.args';
import { DistrictFindManyArgs } from './dto/district-find-many.args';
import { DistrictFindUniqueArgs } from './dto/district-find-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  // async createOne(
  //   districtCreateArgs: DistrictCreateArgs,
  // ): Promise<District | void> {
  //   return await this.districtService.createOne(districtCreateArgs);
  // }

  findMany(districtFindManyArgs: DistrictFindManyArgs) {
    //handle graphql null value
    if (districtFindManyArgs.where?.OR?.[0]?.id?.equals === null) {
      districtFindManyArgs.where.OR[0].id = undefined;
    }

    //handle graphql null value
    if (districtFindManyArgs.where?.OR?.[1]?.name?.contains === null) {
      districtFindManyArgs.where.OR[1].name = undefined;
    }

    //handle graphql null value
    if (districtFindManyArgs.where?.OR?.[2]?.cityId?.equals === null) {
      districtFindManyArgs.where.OR[2].cityId = undefined;
    }

    return this.districtService.findMany(districtFindManyArgs);
  }

  findOne(
    districtFindUniqueArgs: DistrictFindUniqueArgs,
  ): Promise<District | void> {
    return this.districtService.findOne(districtFindUniqueArgs);
  }

  // async updateOne(districtUpdateOneArgs: DistrictUpdateOneArgs) {
  //   const { name, description, images } = districtUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     districtUpdateOneArgs.data.name = undefined;
  //   }

  //   if (description?.set === null) {
  //     districtUpdateOneArgs.data.description = undefined;
  //   }

  //   if (images.delete?.[0]?.url.equals === null) {
  //     districtUpdateOneArgs.data.images.delete = undefined;
  //   }

  //   if (images.deleteMany?.[0]?.url.equals === null) {
  //     districtUpdateOneArgs.data.images.deleteMany = undefined;
  //   }

  //   if (images.createMany?.data?.[0]?.url === null) {
  //     districtUpdateOneArgs.data.images.createMany = undefined;
  //   }
  //   //check for new claim and check if user has enough point
  //   await this.isNewDistrictClaimEventAndIsUserPointEnough(districtUpdateOneArgs);
  //   return this.districtService.update(districtUpdateOneArgs);
  // }

  remove(districtId: number) {
    return this.districtService.remove(districtId);
  }
}
