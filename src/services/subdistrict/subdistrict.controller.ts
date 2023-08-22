import { SubdistrictService } from './subdistrict.service';
import { Subdistrict } from 'src/@generated';
import { SubdistrictCreateArgs } from './dto/subdistrict-create-one.args';
import { SubdistrictFindManyArgs } from './dto/subdistrict-find-many.args';
import { SubdistrictFindUniqueArgs } from './dto/subdistrict-find-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SubdistrictController {
  constructor(private readonly subdistrictService: SubdistrictService) {}

  // async createOne(
  //   subdistrictCreateArgs: SubdistrictCreateArgs,
  // ): Promise<Subdistrict | void> {
  //   return await this.subdistrictService.createOne(subdistrictCreateArgs);
  // }

  findMany(subdistrictFindManyArgs: SubdistrictFindManyArgs) {
    //handle graphql null value
    if (subdistrictFindManyArgs.where?.OR?.[0]?.id?.equals === null) {
      subdistrictFindManyArgs.where.OR[0].id = undefined;
    }

    //handle graphql null value
    if (subdistrictFindManyArgs.where?.OR?.[1]?.name?.contains === null) {
      subdistrictFindManyArgs.where.OR[1].name = undefined;
    }

    //handle graphql null value
    if (subdistrictFindManyArgs.where?.OR?.[2]?.districtId?.equals === null) {
      subdistrictFindManyArgs.where.OR[2].districtId = undefined;
    }

    return this.subdistrictService.findMany(subdistrictFindManyArgs);
  }

  findOne(
    subdistrictFindUniqueArgs: SubdistrictFindUniqueArgs,
  ): Promise<Subdistrict | void> {
    return this.subdistrictService.findOne(subdistrictFindUniqueArgs);
  }

  // async updateOne(subdistrictUpdateOneArgs: SubdistrictUpdateOneArgs) {
  //   const { name, description, images } = subdistrictUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     subdistrictUpdateOneArgs.data.name = undefined;
  //   }

  //   if (description?.set === null) {
  //     subdistrictUpdateOneArgs.data.description = undefined;
  //   }

  //   if (images.delete?.[0]?.url.equals === null) {
  //     subdistrictUpdateOneArgs.data.images.delete = undefined;
  //   }

  //   if (images.deleteMany?.[0]?.url.equals === null) {
  //     subdistrictUpdateOneArgs.data.images.deleteMany = undefined;
  //   }

  //   if (images.createMany?.data?.[0]?.url === null) {
  //     subdistrictUpdateOneArgs.data.images.createMany = undefined;
  //   }
  //   //check for new claim and check if user has enough point
  //   await this.isNewSubdistrictClaimEventAndIsUserPointEnough(subdistrictUpdateOneArgs);
  //   return this.subdistrictService.update(subdistrictUpdateOneArgs);
  // }

  remove(subdistrictId: number) {
    return this.subdistrictService.remove(subdistrictId);
  }
}
